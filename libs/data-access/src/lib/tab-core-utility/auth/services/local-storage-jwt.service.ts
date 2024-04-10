import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageJwtService {
  getItem(): Observable<string | null> {
    const data = localStorage.getItem('jwtToken');
    const appCode = localStorage.getItem('appCode');
    if (data && appCode) {
      return of(data, appCode);
    }
    return of(null);
  }

  setItem(data: string, appcode: string): Observable<string> {
    localStorage.setItem('jwtToken', data);
    localStorage.setItem('appCode', appcode);
    return of(data, appcode);
  }

  removeItem(): Observable<boolean> {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('appCode');
    return of(true);
  }
}
