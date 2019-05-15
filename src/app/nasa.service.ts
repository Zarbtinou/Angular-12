import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private myService: HttpClient;

  constructor(param_http: HttpClient) {
    this.myService = param_http;
   }

   public getImageOfTheDay(): Observable<String>{
     return this.myService.get<String>("https://api.nasa.gov/planetary/apod?api_key=0C2MiOxSZRNRjppudQDedQaEKkgAwzQyjKr5Zrf6")
     
   }
}
