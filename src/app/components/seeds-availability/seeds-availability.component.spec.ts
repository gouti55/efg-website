import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedsAvailabilityComponent } from './seeds-availability.component';

describe('SeedsAvailabilityComponent', () => {
  let component: SeedsAvailabilityComponent;
  let fixture: ComponentFixture<SeedsAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedsAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedsAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
