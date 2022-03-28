import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarPostInicioComponent } from './side-bar-post-inicio.component';

describe('SideBarPostInicioComponent', () => {
  let component: SideBarPostInicioComponent;
  let fixture: ComponentFixture<SideBarPostInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarPostInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarPostInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
