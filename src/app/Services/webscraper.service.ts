import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

//https://coronavirus-tracker-api.herokuapp.com/v2/locations

@Injectable({
  providedIn: 'root'
})
export class WebscraperService {

  constructor(private httpClient:HttpClient) { }

  GetData():Observable<any>{
    return this.httpClient.get('https://api.thevirustracker.com/free-api?global=stats');
  }

  GetIrishData():Observable<any>{
    return this.httpClient.get('https://api.thevirustracker.com/free-api?countryTotal=IE');
  }
}
