import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  noticeSub = new BehaviorSubject<any>({
    message: '',
    type: '',
  });

  constructor() {}

  setNoticeHandler(message: string, type: string) {
    this.noticeSub.next({
      message,
      type,
    });
  }
}
