import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinnaithanditheaterComponent } from './vinnaithanditheater.component';

describe('VinnaithanditheaterComponent', () => {
  let component: VinnaithanditheaterComponent;
  let fixture: ComponentFixture<VinnaithanditheaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VinnaithanditheaterComponent]
    });
    fixture = TestBed.createComponent(VinnaithanditheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
