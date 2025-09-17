// socket.ts

// export function connectSocket() {
//   socket = new WebSocket('ws://localhost:8080');

//   socket.onopen = () => {
//     console.log('WebSocket connected');
//     socket.send('Hello from client!');
//   };

//   socket.onmessage = (event) => {
//     console.log('Message from server:', event.data);
//   };

//   socket.onclose = () => {
//     console.log('WebSocket disconnected');
//   };

//   socket.onerror = (err) => {
//     console.error('WebSocket error:', err);
//   };
// }

// export function sendMessage(msg: string) {
//   if (socket && socket.readyState === WebSocket.OPEN) {
//     socket.send(msg);
//   }
// }


export function sendOnce(message: unknown, location: string): Promise<any> {
    return new Promise((resolve, reject) => {

        const ws = new WebSocket(`ws://5acfced5718a.ngrok-free.app/ws?apiKey=5417250d-1f8a-4946-b6db-8f5fe3008fc6`);


        ws.onopen = () => {
            ws.send(JSON.stringify({ route: location, payload: message }));
        };

        ws.onmessage = (event: MessageEvent) => {
            const response = JSON.parse(event.data);
            if (response.status === 200) resolve(response.data);
            else reject(response.data);
            ws.close();
        };

        ws.onerror = (err) => reject(err);
        ws.onclose = (e) => {
            if (!e.wasClean) reject(e);
        };
    });
}
