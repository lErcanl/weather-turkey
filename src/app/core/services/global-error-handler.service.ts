import { Injectable } from '@angular/core';
import { AlertService } from '../../shared/services/alert.service';
@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler {
  constructor(private alertService: AlertService) {}
  public message = '';

  handleError(error: any): void {
    if (!navigator.onLine) {
      this.message = 'Please check your internet connection';
    }
    if (error.error) {
      this.message = error.error.message;
    }

    this.alertService.setNoticeHandler(this.message, 'Hata');
  }
}
