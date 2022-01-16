import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjiocaresComponent } from './ajiocares.component';

describe('AjiocaresComponent', () => {
  let component: AjiocaresComponent;
  let fixture: ComponentFixture<AjiocaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjiocaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjiocaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
