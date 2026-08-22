export type RealtimeHandler = (message: unknown) => void;

export function connectRealtime(url: string, onMessage: RealtimeHandler): WebSocket {
  const socket = new WebSocket(url);

  socket.addEventListener("message", event => {
    try {
      onMessage(JSON.parse(event.data));
    } catch {
      // Ignore malformed server messages at the UI boundary.
    }
  });

  return socket;
}
