import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosPorSubcategoriaComponent } from './libros-por-subcategoria.component';

describe('LibrosPorSubcategoriaComponent', () => {
  let component: LibrosPorSubcategoriaComponent;
  let fixture: ComponentFixture<LibrosPorSubcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosPorSubcategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosPorSubcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
