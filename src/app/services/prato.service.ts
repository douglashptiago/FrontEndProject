import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Prato } from './../models/prato';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PratoService {

  private serviceURL = 'http://localhost:59207/api/Prato';

  constructor(private http: HttpClient, private router: Router) { }

  getPrato(): Observable<Prato[]>{
    return this.http.get<Prato[]>(this.serviceURL);
}

postPrato(value: Prato){
  this.http.post(this.serviceURL, value)
   .subscribe(data => {
    this.router.navigate(["/pratos"]);
     console.log(data)
    }, 
   err => console.log(err)
  );
}

putPrato(value: Prato){
  this.http.put(this.serviceURL+"/"+value.pratoId, value)
   .subscribe(data => {
    this.router.navigate(["/pratos"]);
    console.log(data);
   } );
}

deletePrato(id){
  this.http.delete(this.serviceURL+"/"+id)
  .subscribe(data => console.log(data));
}
}
