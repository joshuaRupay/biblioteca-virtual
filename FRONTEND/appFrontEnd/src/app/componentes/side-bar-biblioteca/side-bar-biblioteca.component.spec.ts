import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarBibliotecaComponent } from './side-bar-biblioteca.component';

describe('SideBarBibliotecaComponent', () => {
  let component: SideBarBibliotecaComponent;
  let fixture: ComponentFixture<SideBarBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarBibliotecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
