import { PratoService } from './../services/prato.service';
import { HttpClient } from '@angular/common/http';
import { RestauranteService } from './../services/restaurante.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Prato } from './../models/prato';
import { Restaurante } from './../models/restaurante';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prato-edicao',
  templateUrl: './prato-edicao.component.html',
  styleUrls: ['./prato-edicao.component.css']
})
export class PratoEdicaoComponent implements OnInit {

  id: number;
  private sub: any;

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
     private http: HttpClient, private pratoService: PratoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
    });

    this.http.get<Restaurante[]>("http://localhost:59207/api/restaurante")
    .subscribe(
      data => this.restaurantes = data
    );

    this.getPratoById();

    console.log(this.prato);
  }

  getPratoById(){
    this.http.get<Prato>("http://localhost:59207/api/prato/"+this.id)
    .subscribe(data => 
      {
         this.prato = data;
         console.log(data);
      });
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
      console.log(this.prato);
      this.pratoService.putPrato(this.prato);
    }
  }
}
