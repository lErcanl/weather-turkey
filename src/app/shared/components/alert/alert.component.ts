import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['alert.component.scss'],
})
export class AlertComponent implements OnInit {
  public type = '';
  public message = '';

  public alerts = {
    message: '',
    type: '',
  };

  constructor(
    public alertService: AlertService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.alertService.noticeSub.subscribe((notice) => {
      this.alerts = {
        message: notice.message,
        type: notice.type,
      };

      setTimeout(() => {
        this.close();
      }, 5000);
      this.changeDetectorRef.detectChanges();
    });
  }

  close() {
    this.alerts = {
      message: '',
      type: '',
    };
    this.changeDetectorRef.detectChanges();
  }
}
