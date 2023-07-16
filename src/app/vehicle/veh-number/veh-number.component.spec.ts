import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehNumberComponent } from './veh-number.component';

describe('VehNumberComponent', () => {
  let component: VehNumberComponent;
  let fixture: ComponentFixture<VehNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
