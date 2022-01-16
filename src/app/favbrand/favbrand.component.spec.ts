import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavbrandComponent } from './favbrand.component';

describe('FavbrandComponent', () => {
  let component: FavbrandComponent;
  let fixture: ComponentFixture<FavbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavbrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
