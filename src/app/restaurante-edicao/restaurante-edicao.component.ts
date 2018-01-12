import { HttpClient } from '@angular/common/http';
import { RestauranteService } from './../services/restaurante.service';
import { Restaurante } from './../models/restaurante';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurante-edicao',
  templateUrl: './restaurante-edicao.component.html',
  styleUrls: ['./restaurante-edicao.component.css']
})
export class RestauranteEdicaoComponent implements OnInit {

  id: number;
  private sub: any;

  private serviceURL = 'http://localhost:59207/api/Restaurante';

  restaurante: Restaurante = {
    nomeRestaurante: '', 
    restauranteId : 0
  }

  constructor(private route: ActivatedRoute, private router: Router, 
    private restauranteService: RestauranteService, private http: HttpClient) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);

      this.getRestaurante();
   });
  }

  getRestaurante(){
    this.http.get<Restaurante>(this.serviceURL+"/"+this.id)
      .subscribe(data => {
        this.restaurante = data;
      })
  }

  btnCancelarClick(){
    this.router.navigate(['/restaurantes']);
}

btnSalvarClick(){ 
  
  if(this.restaurante.nomeRestaurante == '' || this.restaurante == null){
        alert('Nome do Restaurante é obrigatório');
  }
  else{
    console.log(this.restaurante);
    this.restauranteService.putRestaurante(this.restaurante);
  }  
}
}
