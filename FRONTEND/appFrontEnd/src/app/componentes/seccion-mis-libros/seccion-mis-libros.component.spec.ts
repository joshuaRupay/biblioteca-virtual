import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionMisLibrosComponent } from './seccion-mis-libros.component';

describe('SeccionMisLibrosComponent', () => {
  let component: SeccionMisLibrosComponent;
  let fixture: ComponentFixture<SeccionMisLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionMisLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionMisLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
