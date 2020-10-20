import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CreateUserRequestDTO from '../dtos/CreateUserRequestDTO';
import SignInUserRequestDTO from '../dtos/SignInRequestDTO';
import SignInResponseDTO from '../dtos/SignInResponseDTO';
import UserCreatedResponseDTO from '../dtos/UserCreatedResponseDTO';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // test
  private BASE_URL = 'http://127.0.0.1:8080';

  constructor(private httpClient: HttpClient) { }

  signUp(createUserRequestDTO: CreateUserRequestDTO): Observable<UserCreatedResponseDTO> {
    return this.httpClient.post<UserCreatedResponseDTO>(`${this.BASE_URL}/user/signup`, createUserRequestDTO);
  }

  signIn(signDTO: SignInUserRequestDTO): Observable<SignInResponseDTO> {
    return this.httpClient.post<SignInResponseDTO>(`${this.BASE_URL}/user/signin`, signDTO);
  }

}
