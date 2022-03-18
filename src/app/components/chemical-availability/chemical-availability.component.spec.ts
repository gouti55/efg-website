import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalAvailabilityComponent } from './chemical-availability.component';

describe('ChemicalAvailabilityComponent', () => {
  let component: ChemicalAvailabilityComponent;
  let fixture: ComponentFixture<ChemicalAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChemicalAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
