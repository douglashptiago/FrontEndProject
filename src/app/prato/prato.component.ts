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

  constructor(private pratoService: PratoService, private router: Router) { }

  ngOnInit() {
  }

  btnClick= function () {
    this.router.navigate(['/pratos/add']);
  };
}



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

