import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesTypeComponent } from './activities-type.component';

describe('ActivitiesTypeComponent', () => {
  let component: ActivitiesTypeComponent;
  let fixture: ComponentFixture<ActivitiesTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
