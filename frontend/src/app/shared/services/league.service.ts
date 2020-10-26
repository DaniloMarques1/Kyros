import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateLeagueRequestDTO } from '../dtos/CreateLeagueRequestDTO';
import { GetAllLeaguesDTO } from '../dtos/GetAllLeaguesDTO';
import { League } from '../models/League';


@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  private BASE_URL = 'http://127.0.0.1:8080';

  constructor(private httpClient: HttpClient) { }

  getAllLeagues(id: string): Observable<GetAllLeaguesDTO> {
    // TODO
    const httpHeader = new HttpHeaders({
      token: id
    });

    return this.httpClient.get<GetAllLeaguesDTO>(`${this.BASE_URL}/leagues`, {headers: httpHeader});
  }

  addLeague(id: string, createLeagueRequestDTO: CreateLeagueRequestDTO): Observable<League> {
    const httpHeader = new HttpHeaders({
      token: id
    });
    return this.httpClient.post<League>(`${this.BASE_URL}/leagues`, createLeagueRequestDTO, {
      headers: httpHeader
    });
  }

}
