import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisuaPrenotazioneComponent } from './visua-prenotazione.component';

describe('VisuaPrenotazioneComponent', () => {
  let component: VisuaPrenotazioneComponent;
  let fixture: ComponentFixture<VisuaPrenotazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisuaPrenotazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisuaPrenotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
