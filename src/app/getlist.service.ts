import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetlistService {

  private url = 'https://jsonplaceholder.typicode.com/users';
   
  constructor(private httpClient: HttpClient) { }
  
  getList(){
    return this.httpClient.get(this.url);
  }
}
