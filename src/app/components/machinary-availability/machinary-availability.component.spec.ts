import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinaryAvailabilityComponent } from './machinary-availability.component';

describe('MachinaryAvailabilityComponent', () => {
  let component: MachinaryAvailabilityComponent;
  let fixture: ComponentFixture<MachinaryAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachinaryAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinaryAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
