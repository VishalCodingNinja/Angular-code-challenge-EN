import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehTypeComponent } from './veh-type.component';

describe('VehTypeComponent', () => {
  let component: VehTypeComponent;
  let fixture: ComponentFixture<VehTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
