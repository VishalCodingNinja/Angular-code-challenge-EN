import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehSubTypeComponent } from './veh-sub-type.component';

describe('VehSubTypeComponent', () => {
  let component: VehSubTypeComponent;
  let fixture: ComponentFixture<VehSubTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehSubTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehSubTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
