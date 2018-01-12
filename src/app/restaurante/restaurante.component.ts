import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Restaurante } from './../models/restaurante';
import { RestauranteService } from './../services/restaurante.service';
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections'
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  dataSource = new RestauranteDataSource(this.restauranteService);
  displayedColumns = ['editar','excluir','restaurante'];

  constructor(private restauranteService: RestauranteService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }


  btnAddClick(){
    this.router.navigate(['/restaurantes/add']);
  }

  btnPesquisarClick(){
    
  }

  OnEditarClick(evento){
    console.log(evento);
  }
}

export class RestauranteDataSource extends DataSource<any>
{
  constructor(private restauranteService: RestauranteService){
    super();
  }

  connect(): Observable<Restaurante[]>{
    return this.restauranteService.getRestaurante();
  }
  
  disconnect(){}
}


