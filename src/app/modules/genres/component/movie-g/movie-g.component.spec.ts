import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGComponent } from './movie-g.component';

describe('MovieGComponent', () => {
  let component: MovieGComponent;
  let fixture: ComponentFixture<MovieGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
