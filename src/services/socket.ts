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
        // console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL)
        const socket = new WebSocket(process.env.REACT_APP_API_URL + location);

        socket.onopen = () => { socket.send(JSON.stringify(message)) }
        socket.onmessage = (event) => {
            const response = JSON.parse(event.data);
            resolve(response);
            socket.close()
        }
        socket.onclose = (e) => { reject(e) }
    })
}
