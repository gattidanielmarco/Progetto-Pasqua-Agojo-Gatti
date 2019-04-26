import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPrenotazioneComponent } from './lista-prenotazione.component';

describe('ListaPrenotazioneComponent', () => {
  let component: ListaPrenotazioneComponent;
  let fixture: ComponentFixture<ListaPrenotazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPrenotazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPrenotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
