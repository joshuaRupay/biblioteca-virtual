import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInicioBienvenidaComponent } from './post-inicio-bienvenida.component';

describe('PostInicioBienvenidaComponent', () => {
  let component: PostInicioBienvenidaComponent;
  let fixture: ComponentFixture<PostInicioBienvenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostInicioBienvenidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInicioBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
