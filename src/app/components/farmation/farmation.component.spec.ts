import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmationComponent } from './farmation.component';

describe('FarmationComponent', () => {
  let component: FarmationComponent;
  let fixture: ComponentFixture<FarmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
