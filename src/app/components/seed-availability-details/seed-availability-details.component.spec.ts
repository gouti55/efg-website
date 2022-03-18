import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedAvailabilityDetailsComponent } from './seed-availability-details.component';

describe('SeedAvailabilityDetailsComponent', () => {
  let component: SeedAvailabilityDetailsComponent;
  let fixture: ComponentFixture<SeedAvailabilityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedAvailabilityDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedAvailabilityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
