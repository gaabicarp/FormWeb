import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasFinalComponent } from './preguntas-final.component';

describe('PreguntasFinalComponent', () => {
  let component: PreguntasFinalComponent;
  let fixture: ComponentFixture<PreguntasFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntasFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
