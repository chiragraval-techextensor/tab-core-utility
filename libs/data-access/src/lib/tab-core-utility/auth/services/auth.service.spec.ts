import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { LocalStorageJwtService } from './local-storage-jwt.service';
import { MockProvider } from 'ng-mocks';
import { ApiService } from '../../core/http-client/api.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        LocalStorageJwtService,
        MockProvider(ApiService),
      ],
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
