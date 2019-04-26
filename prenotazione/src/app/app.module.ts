import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaPrenotazioneComponent } from './lista-prenotazione/lista-prenotazione.component';
import { VisuaPrenotazioneComponent } from './visua-prenotazione/visua-prenotazione.component';
import {   //Importare le funzionalità nella nostra applicazione
 FormsModule,
 ReactiveFormsModule
} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    ListaPrenotazioneComponent,
    VisuaPrenotazioneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  //Anche qui
    ReactiveFormsModule,
    NgbModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
