import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesGComponent } from './movies-g.component';

describe('MoviesGComponent', () => {
  let component: MoviesGComponent;
  let fixture: ComponentFixture<MoviesGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
