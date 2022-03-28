import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaInicioComponent } from './biblioteca-inicio.component';

describe('BibliotecaInicioComponent', () => {
  let component: BibliotecaInicioComponent;
  let fixture: ComponentFixture<BibliotecaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecaInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
