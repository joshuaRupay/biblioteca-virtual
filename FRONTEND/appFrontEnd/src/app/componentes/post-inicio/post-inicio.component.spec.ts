import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInicioComponent } from './post-inicio.component';

describe('PostInicioComponent', () => {
  let component: PostInicioComponent;
  let fixture: ComponentFixture<PostInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
