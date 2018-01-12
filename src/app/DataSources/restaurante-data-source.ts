import { Observable } from 'rxjs/Observable';
import { RestauranteService } from './../services/restaurante.service';
import { Restaurante } from './../models/restaurante';
import { DataSource } from '@angular/cdk/collections';

export class RestauranteDataSource extends DataSource<Restaurante>
{
  constructor(private restauranteService: RestauranteService){
    super();
  }

  connect(): Observable<Restaurante[]>{
    return this.restauranteService.getRestaurante();
  }
  
  disconnect(){}
}
