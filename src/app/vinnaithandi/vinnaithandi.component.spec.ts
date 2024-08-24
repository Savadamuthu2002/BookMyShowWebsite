import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinnaithandiComponent } from './vinnaithandi.component';

describe('VinnaithandiComponent', () => {
  let component: VinnaithandiComponent;
  let fixture: ComponentFixture<VinnaithandiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VinnaithandiComponent]
    });
    fixture = TestBed.createComponent(VinnaithandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
