import { TestBed } from '@angular/core/testing';
import { AlertService } from '../../shared/services/alert.service';

import { GlobalErrorHandler } from './global-error-handler.service';

describe('GlobalErrorHandlerService', () => {
  let service: GlobalErrorHandler;
  let alertService: AlertService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalErrorHandler);
    alertService = TestBed.inject(AlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(alertService.setNoticeHandler(service.message, 'Hata'));
  });
});
