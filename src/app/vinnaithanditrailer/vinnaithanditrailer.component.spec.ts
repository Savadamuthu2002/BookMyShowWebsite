import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinnaithanditrailerComponent } from './vinnaithanditrailer.component';

describe('VinnaithanditrailerComponent', () => {
  let component: VinnaithanditrailerComponent;
  let fixture: ComponentFixture<VinnaithanditrailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VinnaithanditrailerComponent]
    });
    fixture = TestBed.createComponent(VinnaithanditrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
