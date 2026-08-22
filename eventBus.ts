export type EventHandler<T> = (event: T) => void;

export class EventBus<T> {
  private handlers = new Set<EventHandler<T>>();

  subscribe(handler: EventHandler<T>): () => void {
    this.handlers.add(handler);
    return () => this.handlers.delete(handler);
  }

  publish(event: T): void {
    for (const handler of this.handlers) handler(event);
  }
}
