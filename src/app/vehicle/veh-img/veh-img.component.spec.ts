import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehImgComponent } from './veh-img.component';

describe('VehImgComponent', () => {
  let component: VehImgComponent;
  let fixture: ComponentFixture<VehImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
