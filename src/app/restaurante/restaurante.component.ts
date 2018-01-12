import { RestauranteDataSource } from './../DataSources/restaurante-data-source';
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

  private serviceURL = 'http://localhost:59207/api/Restaurante';
  dataSource = new RestauranteDataSource(this.restauranteService);
  displayedColumns = ['editar','excluir','restaurante'];
  filter: string = "";

  constructor(private restauranteService: RestauranteService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }


  btnAddClick(){
    this.router.navigate(['/restaurantes/add']);
  }

  btnPesquisarClick(){
    if(this.filter == ""){
        alert("O Nome é obrigatório");
    }else{
      alert("Valor para consulta: "+this.filter);
    }

    //FiltrarDataSource(); Não implementado
  }

  OnEditarClick(myRestaurante: Restaurante)
  {
      this.router.navigate(['/restaurantes/edit', myRestaurante.restauranteId]);  
  }

  deleteRestaurante(id: string){
    this.http.delete(this.serviceURL+"/"+id)
    .subscribe(
      data => {
        this.dataSource = new RestauranteDataSource(this.restauranteService);
      });
  }

  OnExcluirClick(myRestaurante: Restaurante)
  {
      this.deleteRestaurante(myRestaurante.restauranteId.toString());
  }
}

