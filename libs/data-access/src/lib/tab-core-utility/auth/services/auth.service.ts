import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser, LoginUserRequest } from '../../core/api-types/auth';
import { UserResponse } from '../../core/api-types/user';
import { ApiService } from '../../core/http-client/api.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiService = inject(ApiService);

  user(url: string): Observable<UserResponse> {
    return this.apiService.get<UserResponse>(url);
  }

  signIn(url: string, credentials: LoginUser): Observable<UserResponse> {
    return this.apiService.post<UserResponse, LoginUserRequest>(url, {
      user: credentials,
    });
  }
}
