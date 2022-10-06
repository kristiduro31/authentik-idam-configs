import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";


@Injectable({providedIn:"root"})
export class Service {

  constructor(private http:HttpClient) {}

  getRequest( accessToken:string ) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + accessToken
      }),
      responseType: 'text' as 'json'
    };
    return this.http.get("/WeatherForecast", httpOptions);
  }
}
