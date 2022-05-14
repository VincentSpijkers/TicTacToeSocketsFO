import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../modules/lobby/Room";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL = 'http://localhost:3000/api/lobby'

  constructor(private http: HttpClient) { }

  public getNewLobbyId() : Observable<Room> {
    return this.http.get<Room>(this.apiURL + "/generateId");
  }
}
