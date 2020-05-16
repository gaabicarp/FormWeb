import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadoHogarComponent } from './cuidado-hogar.component';

describe('CuidadoHogarComponent', () => {
  let component: CuidadoHogarComponent;
  let fixture: ComponentFixture<CuidadoHogarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuidadoHogarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidadoHogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
