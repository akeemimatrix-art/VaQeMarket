import { encodeWsMessage, type WsMessage } from "./wsProtocol";

export interface ClientSocket {
  send(data: string): void;
  close?: () => void;
}

export class WebSocketHub {
  private clients = new Set<ClientSocket>();

  add(client: ClientSocket): () => void {
    this.clients.add(client);
    return () => this.clients.delete(client);
  }

  broadcast(message: WsMessage): void {
    const encoded = encodeWsMessage(message);
    for (const client of this.clients) client.send(encoded);
  }
}
