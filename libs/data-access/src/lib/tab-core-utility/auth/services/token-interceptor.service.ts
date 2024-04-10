/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageJwtService } from './local-storage-jwt.service';

export const TokenInterceptorService = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  let token: string | null = null;
  let appCode: string | null = null;

  inject(LocalStorageJwtService)
    .getItem()
    .subscribe((t) => {
      token = t;
    });

  inject(LocalStorageJwtService)
    .getItem()
    .subscribe((t) => {
      appCode = t;
    });

  if (token && appCode) {
    request = request.clone({
      setHeaders: {
        Authorization: `Token ${token}`,
        ApplicationCode: appCode,
      },
    });
  }
  return next(request);
};
