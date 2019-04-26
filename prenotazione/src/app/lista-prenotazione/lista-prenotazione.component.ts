import { Component, OnInit,Input } from '@angular/core';
import { Prenotazione } from '../prenotazione';
@Component({
  selector: 'app-lista-prenotazione',
  templateUrl: './lista-prenotazione.component.html',
  styleUrls: ['./lista-prenotazione.component.css']
})
export class ListaPrenotazioneComponent implements OnInit {
  @Input()prenotazione: Prenotazione;
  constructor() { }

  ngOnInit() {
  }

}
