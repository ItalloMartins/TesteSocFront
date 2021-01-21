import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamesListComponent } from './exames-list/exames-list.component';
import { UpdateExamesComponent } from './update-exames/update-exames.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateExamesComponent } from './create-exames/create-exames.component';
import { ExamesDetalhesComponent } from './exames-detalhes/exames-detalhes.component';
import ptBr from '@angular/common/locales/pt';
@NgModule({

  declarations: [
    AppComponent,
    ExamesListComponent,
    UpdateExamesComponent,
    CreateExamesComponent,
    ExamesDetalhesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
