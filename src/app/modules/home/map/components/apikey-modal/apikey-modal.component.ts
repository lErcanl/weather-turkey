import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
//services
import { ModalDirective } from 'ngx-bootstrap/modal';
import { WeatherService } from '../../../../../core/http/weather/weather.service';
import { AlertService } from '../../../../../shared/services/alert.service';

@Component({
  selector: 'apikey-modal',
  templateUrl: './apikey-modal.component.html',
  styleUrls: ['./apikey-modal.component.scss'],
})
export class ApikeyModalComponent implements OnInit {
  @ViewChild('autoShownModal', { static: false })
  autoShownModal?: ModalDirective;
  public apiKeyForm!: FormGroup;
  modalRef?: BsModalRef;

  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherService,
    private alertService: AlertService
  ) {}

  isModalShown = true;

  showModal(): void {
    this.isModalShown = true;
  }

  hideModal(): void {
    this.autoShownModal?.hide();
  }

  ngOnInit() {
    this.apiKeyForm = this.formBuilder.group({
      apiKey: [''],
    });
  }

  submit() {
    const requestData = {
      q: 'İstanbul',
      appid: this.apiKeyForm.value.apiKey,
      units: 'metric',
    };
    this.weatherService.getWeather(requestData).subscribe((data) => {
      sessionStorage.setItem('apiKey', requestData.appid);
      this.isModalShown = false;
      const message = 'Api Key Doğrulandı';
      this.alertService.setNoticeHandler(message, 'Başarılı');
    });
  }
}
