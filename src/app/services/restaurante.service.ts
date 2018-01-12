
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Restaurante } from './../models/restaurante';
import { Router } from '@angular/router';

@Injectable()
export class RestauranteService {

  private serviceURL = 'http://localhost:59207/api/Restaurante';

  constructor(private http: HttpClient, private router:Router) { }

  getRestaurante(): Observable<Restaurante[]>{
      return this.http.get<Restaurante[]>(this.serviceURL);
  }

  postRestaurante(value: Restaurante){
    this.http.post(this.serviceURL, value)
     .subscribe(data => {
      this.router.navigate(["/restaurantes"]);
       console.log(data)
      }, 
     err => console.log(err)
    );
  }

  putRestaurante(value: Restaurante){
    this.http.put(this.serviceURL, value)
     .subscribe(data => console.log(data));
  }

  deleteRestaurante(id){
    this.http.delete(this.serviceURL+"/"+id)
    .subscribe(data => console.log(data));
  }
}
