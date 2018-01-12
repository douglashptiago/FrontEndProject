import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { PratoComponent } from './prato/prato.component';
import { PratoCadastroComponent } from './prato-cadastro/prato-cadastro.component';
import { RestauranteCadastroComponent } from './restaurante-cadastro/restaurante-cadastro.component';

import { RestauranteService } from './services/restaurante.service';
import { PratoService } from './services/prato.service';
import { MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RestauranteEdicaoComponent } from './restaurante-edicao/restaurante-edicao.component';
import { PratoEdicaoComponent } from './prato-edicao/prato-edicao.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestauranteComponent,
    PratoComponent,
    PratoCadastroComponent,
    RestauranteCadastroComponent,
    RestauranteEdicaoComponent,
    PratoEdicaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    MatTableModule, 
    FormsModule
  ],
  providers: [
    PratoService, 
    RestauranteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
