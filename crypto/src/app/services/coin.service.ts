import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Coin } from "../model/coin.model";
import { Observable } from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class CoinService {


  constructor(private http: HttpClient) { }
  baseUrl: string = `${environment.apiUrl}`;


  getCoins(): Observable<Coin[]> {
    return this.http
      .get<Coin[]>(this.baseUrl + '/coins/list');
  }


}

