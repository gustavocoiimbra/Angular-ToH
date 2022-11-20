import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private message: string[] = [];

  constructor() { }

  add(messages: string): void {
    this.message.push(messages);
  };

  clear(): void {
    this.message = [];
  }

  getMessage(): string[] {
    return this.message;
  }
}
