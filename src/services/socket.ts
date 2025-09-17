// socket.ts
let ws: WebSocket | null = null;
interface QueuedMessage { route: string; payload: unknown; resolve: (value: any) => void; reject: (reason?: any) => void; }
let messageQueue: QueuedMessage[] = [];


type Callback = (payload: any) => void;

const listeners: Record<string, Callback[]> = {};

export function subscribe(route: string, cb: Callback) {
    if (!listeners[route]) listeners[route] = [];
    listeners[route].push(cb);
    return () => {
        listeners[route] = listeners[route].filter(fn => fn !== cb);
    };
}


function emit(route: string, payload: any) {
    listeners[route]?.forEach(cb => cb(payload));
}


export function getWebSocket(): WebSocket {
    if (!ws || ws.readyState === WebSocket.CLOSED) {
        // ws = new WebSocket(`ws://5acfced5718a.ngrok-free.app/ws?apiKey=5417250d-1f8a-4946-b6db-8f5fe3008fc6`);
        ws = new WebSocket(`ws://localhost:3000/ws?apiKey=5417250d-1f8a-4946-b6db-8f5fe3008fc6`);

        ws.onopen = () => {
            messageQueue.forEach(item => ws!.send(JSON.stringify({ route: item.route, payload: item.payload })));
            messageQueue = [];
        };

        ws.onmessage = (event: MessageEvent) => {
            const response = JSON.parse(event.data);

            switch (response.route) {
                case 'PELOTONS': { emit('PELOTONS', response.payload); break; }
                case 'SHOOTERS': { emit('SHOOTERS', response.payload); break; }
                default: {
                    break;
                }
            }

            if (response.status !== undefined) {
                const index = messageQueue.findIndex(item => item.route === response.route && item.resolve);
                if (index >= 0) {
                    const item = messageQueue.splice(index, 1)[0];
                    if (response.status === 200) item.resolve(response.data);
                    else item.reject(response.data);
                }
            }
        };

        ws.onerror = (err) => {
            console.error('WebSocket error:', err);
        };

        ws.onclose = (e) => {
            if (!e.wasClean) console.warn('WebSocket closed unexpectedly', e);
            ws = null;
        };
    }

    return ws;
}

export function sendOnce(payload: unknown, route: string): Promise<any> {
    return new Promise((resolve, reject) => {
        const socket = getWebSocket();

        console.log('router', route)

        if (socket.readyState === WebSocket.OPEN) socket.send(JSON.stringify({ route, payload }));
        else messageQueue.push({ route, payload, resolve, reject });

        const listener = (event: MessageEvent) => {
            const response = JSON.parse(event.data);
            if (response.status !== undefined) {
                console.log('RESPONSE DATA', response.data)
                if (response.status === 200) resolve(response.data);
                else reject(response.data);
                socket.removeEventListener('message', listener);
            }
        };

        socket.addEventListener('message', listener);
    });
}