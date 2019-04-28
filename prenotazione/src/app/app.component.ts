import { Component, OnInit } from '@angular/core';
import {  //Importa FormBuilder e FormGroup
 FormBuilder,
 FormGroup,
 Validators
} from '@angular/forms';
import { Prenotazione } from './prenotazione';
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
 myForm: FormGroup;  //Dichiara una variabile di tipo FormGroup
 p = Array<Prenotazione>();
 constructor(fb: FormBuilder) { //Il costruttore riceve come parametro il From Builder
   /*Diciamo al FormBuilder di creare un FormGroup che conterrà un FormControl
    *Chiamato sku, con valore di default ABC123 */
   this.myForm = fb.group({
     'nome': ['NOME', Validators.required],
     'cognome': ['COGNOME', Validators.required],
     'indirizzo':['INDIRIZZO', Validators.required],
     'telefono':['TELEFONO', Validators.required],
     'email':['EMAIL', Validators.required],
     'data':['DATA', Validators.required],
     'ora':['ORA', Validators.required],
   });
 }
 ngOnInit() {
 }
 onSubmit(nome: HTMLInputElement,cognome: HTMLInputElement,indirizzo: HTMLInputElement,telefono: HTMLInputElement,email: HTMLInputElement,data: HTMLInputElement,ora: HTMLInputElement) {
   let prenota: Prenotazione = new Prenotazione();
     prenota.nome = this.myForm.controls['nome'].value;
     prenota.cognome = this.myForm.controls['cognome'].value;
     prenota.indirizzo = this.myForm.controls['indirizzo'].value;
     prenota.telefono = this.myForm.controls['telefono'].value;
     prenota.email = this.myForm.controls['email'].value;
     prenota.data = this.myForm.controls['data'].value;
     prenota.ora = this.myForm.controls['ora'].value;
     this.p.push(prenota);
     
 }
}
