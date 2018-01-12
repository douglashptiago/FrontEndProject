import { PratoDataSource } from './../DataSources/prato-data-source';
import { HttpClient } from '@angular/common/http';
import { PratoService } from './../services/prato.service';
import { Observable } from 'rxjs/Observable';
import { Prato } from './../models/prato';
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections'
import { Router } from '@angular/router';

@Component({
  selector: 'app-prato',
  templateUrl: './prato.component.html',
  styleUrls: ['./prato.component.css']
})
export class PratoComponent implements OnInit {

  dataSource = new PratoDataSource(this.pratoService);
  displayedColumns = ['editar','excluir','restauranteId','prato','preco'];

  constructor(private pratoService: PratoService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  btnClick= function () {
    this.router.navigate(['/pratos/add']);
  };

  OnEditarClick(myPrato: Prato)
  {
      this.router.navigate(['/pratos/edit', myPrato.pratoId.toString()]);  
  }

  deletePrato(id: string){
    this.http.delete("http://localhost:59207/api/prato/"+id)
    .subscribe(
      data => {
        this.dataSource = new PratoDataSource(this.pratoService);
      });
  }

  OnExcluirClick(myPrato: Prato)
  {
      this.deletePrato(myPrato.pratoId.toString());
  }
}

