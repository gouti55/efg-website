import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmationListComponent } from './farmation-list.component';

describe('FarmationComponent', () => {
  let component: FarmationListComponent;
  let fixture: ComponentFixture<FarmationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
