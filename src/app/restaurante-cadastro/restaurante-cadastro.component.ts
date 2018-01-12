import { Restaurante } from './../models/restaurante';
import { RestauranteService } from './../services/restaurante.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurante-cadastro',
  templateUrl: './restaurante-cadastro.component.html',
  styleUrls: ['./restaurante-cadastro.component.css']
})
export class RestauranteCadastroComponent implements OnInit {

  constructor(private router: Router, private restauranteService: RestauranteService) { }

  restaurante: Restaurante = {
    nomeRestaurante: '', 
    restauranteId : 0
  }

  ngOnInit() {
  }

  btnCancelarClick(){
      this.router.navigate(['/restaurantes']);
  }

  btnSalvarClick(){ 
    
    if(this.restaurante.nomeRestaurante == '' || this.restaurante == null){
          alert('Nome do Restaurante é obrigatório');
    }
    else{
      this.restauranteService.postRestaurante(this.restaurante);
    }   
  }
}
