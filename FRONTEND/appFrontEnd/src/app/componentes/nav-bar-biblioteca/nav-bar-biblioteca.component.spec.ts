import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarBibliotecaComponent } from './nav-bar-biblioteca.component';

describe('NavBarBibliotecaComponent', () => {
  let component: NavBarBibliotecaComponent;
  let fixture: ComponentFixture<NavBarBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarBibliotecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
