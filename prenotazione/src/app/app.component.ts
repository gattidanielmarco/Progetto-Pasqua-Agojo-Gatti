import { Component, OnInit } from '@angular/core';
import {  //Importa FormBuilder e FormGroup
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { Prenotazione } from 'prenotazione';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  myForm: FormGroup;  //Dichiara una variabile di tipo FormGroup
  p = Prenotazione;
  constructor(fb: FormBuilder) { //Il costruttore riceve come parametro il From Builder
    /*Diciamo al FormBuilder di creare un FormGroup che conterrà un FormControl
     *Chiamato sku, con valore di default ABC123 */
    this.myForm = fb.group({
      'nome': ['NOME'],
      'cognome': ['COGNOME'],
      'indirizzo':['INDIRIZZO'],
      'telefono':['TELEFONO'],
      'email':['EMAIL'],
      'data':['DATA'],
      'ora':['ORA'],
    });
  }
  ngOnInit() {
  }
  onSubmit(nome: HTMLInputElement,cognome: HTMLInputElement,indirizzo: HTMLInputElement,telefono: HTMLInputElement,email: HTMLInputElement,data: HTMLInputElement,ora: HTMLInputElement) {
    let prenota: Prenotazione = new Prenotazione();
      prenota.nome = nome.value;
      prenota.cognome = cognome.value;
      prenota.indirizzo = indirizzo.value;
      prenota.telefono = Number(telefono.value);
      prenota.email = email.value;
      prenota.data = data.value;
      prenota.ora = ora.value;
      this.p.push(prenota);
  }
}
