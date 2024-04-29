import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  public eventEmitter = new EventEmitter<any>();

  emitEvent(data: any) {
    this.eventEmitter.emit(data);
  }

  getEvent() {
    return this.eventEmitter;
  }
}
