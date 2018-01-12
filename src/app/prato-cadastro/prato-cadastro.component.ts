import { PratoService } from './../services/prato.service';
import { Prato } from './../models/prato';
import { Observable } from 'rxjs/Observable';
import { RestauranteService } from './../services/restaurante.service';
import { Restaurante } from './../models/restaurante';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prato-cadastro',
  templateUrl: './prato-cadastro.component.html',
  styleUrls: ['./prato-cadastro.component.css']
})
export class PratoCadastroComponent implements OnInit {

  restaurantes: Restaurante[];
  selectedItem: Restaurante = {
    nomeRestaurante: "",
    restauranteId: 0
  };

  prato: Prato = {
    nomePrato: "", 
    preco: null, 
    restauranteId: 0, 
    pratoId: 0
  };

  constructor(private router: Router, private restauranteService: RestauranteService,
     private http: HttpClient, private pratoService: PratoService) { }

  ngOnInit() {
 
    this.http.get<Restaurante[]>("http://localhost:59207/api/Restaurante")
    .subscribe(
      data => this.restaurantes = data
    );
  }

  btnCancelarClick(){
    this.router.navigate(["/pratos"]);
  }

  btnSalvarClick()
  {
    if(this.selectedItem.restauranteId == 0){
      alert('Selecione um restaurante');
      return;
    }else if(this.prato.nomePrato == ""){
      alert('Nome do Prato obrigatório');
      return;
    }else if(this.prato.preco == null){
      //Verificar se é número
      alert('Preço do Prato obrigatório');
      return;
    }
    
    else{
      this.prato.restauranteId = this.selectedItem.restauranteId;
      this.pratoService.postPrato(this.prato);
    }
  }
}
