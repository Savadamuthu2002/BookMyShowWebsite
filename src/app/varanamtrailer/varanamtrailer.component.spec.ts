import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaranamtrailerComponent } from './varanamtrailer.component';

describe('VaranamtrailerComponent', () => {
  let component: VaranamtrailerComponent;
  let fixture: ComponentFixture<VaranamtrailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaranamtrailerComponent]
    });
    fixture = TestBed.createComponent(VaranamtrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
