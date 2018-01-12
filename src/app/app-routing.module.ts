import { RestauranteEdicaoComponent } from './restaurante-edicao/restaurante-edicao.component';
import { PratoComponent } from './prato/prato.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PratoCadastroComponent } from './prato-cadastro/prato-cadastro.component';
import { RestauranteCadastroComponent } from './restaurante-cadastro/restaurante-cadastro.component';
import { PratoEdicaoComponent } from './prato-edicao/prato-edicao.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'pratos', component: PratoComponent},
  { path: 'pratos/add', component: PratoCadastroComponent},
  { path: 'pratos/edit/:id', component: PratoEdicaoComponent},
  { path: 'restaurantes', component: RestauranteComponent},
  { path: 'restaurantes/add', component: RestauranteCadastroComponent},
  { path: 'restaurantes/edit/:id', component: RestauranteEdicaoComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
