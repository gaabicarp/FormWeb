import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiezayCuidadoComponent } from './limpiezay-cuidado.component';

describe('LimpiezayCuidadoComponent', () => {
  let component: LimpiezayCuidadoComponent;
  let fixture: ComponentFixture<LimpiezayCuidadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimpiezayCuidadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimpiezayCuidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
