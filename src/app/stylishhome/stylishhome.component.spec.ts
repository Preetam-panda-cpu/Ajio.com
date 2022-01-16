import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylishhomeComponent } from './stylishhome.component';

describe('StylishhomeComponent', () => {
  let component: StylishhomeComponent;
  let fixture: ComponentFixture<StylishhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylishhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylishhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
