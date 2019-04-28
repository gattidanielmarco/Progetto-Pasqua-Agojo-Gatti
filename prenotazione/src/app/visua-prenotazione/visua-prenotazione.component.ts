import { Component, OnInit, Input } from '@angular/core';
import { Prenotazione } from '../prenotazione';
@Component({
  selector: 'app-visua-prenotazione',
  templateUrl: './visua-prenotazione.component.html',
  styleUrls: ['./visua-prenotazione.component.css']
})
export class VisuaPrenotazioneComponent implements OnInit {
@Input() p: Prenotazione;
  constructor() { }

  ngOnInit() {
  }

}
