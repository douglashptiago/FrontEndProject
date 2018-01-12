import { DataSource } from '@angular/cdk/collections';
import { Prato } from './../models/prato';
import { Observable } from 'rxjs/Observable';
import { PratoService } from './../services/prato.service';

export class PratoDataSource extends DataSource<any>
{
  constructor(private pratoService: PratoService){
    super();
  }

  connect(): Observable<Prato[]>{
    return this.pratoService.getPrato();
  }
  
  disconnect(){}
}