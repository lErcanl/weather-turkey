import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { ApikeyModalComponent } from './apikey-modal.component';

describe('ApikeyModalComponent', () => {
  let component: ApikeyModalComponent;
  let fixture: ApikeyModalComponent;
  let weatherServiceMock: any;
  let alertServiceMock: any;
  let formBuilderMock: FormBuilder;

  beforeEach(() => {
    weatherServiceMock = {
      getWeather: jest.fn(),
    };
    alertServiceMock = {
      setNoticeHandler: jest.fn(),
    };
    formBuilderMock = new FormBuilder();

    fixture = new ApikeyModalComponent(
      formBuilderMock,
      weatherServiceMock,
      alertServiceMock
    );
    fixture.ngOnInit();
  });

  describe('Test: ngOnInit()', () => {
    it('should be initiliazed apiForm', () => {
      const apiKeyForm = {
        apiKey: '',
      };
      expect(fixture.apiKeyForm.value).toEqual(apiKeyForm);
    });
  });
});
