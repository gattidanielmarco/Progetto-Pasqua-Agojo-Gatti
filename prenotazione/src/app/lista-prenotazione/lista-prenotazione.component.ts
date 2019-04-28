import { Component, OnInit,Input } from '@angular/core';
import { Prenotazione } from '../prenotazione';
import { Prenotazioni } from '../mock-prenotazione';
@Component({
  selector: 'app-lista-prenotazione',
  templateUrl: './lista-prenotazione.component.html',
  styleUrls: ['./lista-prenotazione.component.css']
})
export class ListaPrenotazioneComponent implements OnInit {
  @Input()p: Array<Prenotazione>;
  appSelezionato: Prenotazione;
  constructor() { }

  ngOnInit() {
  }
   onSelect(prenota: Prenotazione): void {
    this.appSelezionato = prenota;
 }

}
