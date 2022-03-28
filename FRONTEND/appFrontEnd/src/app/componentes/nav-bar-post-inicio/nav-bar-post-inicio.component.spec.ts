import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarPostInicioComponent } from './nav-bar-post-inicio.component';

describe('NavBarPostInicioComponent', () => {
  let component: NavBarPostInicioComponent;
  let fixture: ComponentFixture<NavBarPostInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarPostInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarPostInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
