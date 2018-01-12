import { PratoComponent } from './prato/prato.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PratoCadastroComponent } from './prato-cadastro/prato-cadastro.component';
import { RestauranteCadastroComponent } from './restaurante-cadastro/restaurante-cadastro.component';

const routes: Routes = [
  { path: 'pratos', component: PratoComponent},
  { path: 'restaurantes', component: RestauranteComponent},
  { path: '', component: HomeComponent},
  { path: 'pratos/add', component: PratoCadastroComponent},
  { path: 'restaurantes/add', component: RestauranteCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
