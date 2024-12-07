import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderServiceCreateComponent } from './order-service-create.component';

describe('OrderServiceCreateComponent', () => {
  let component: OrderServiceCreateComponent;
  let fixture: ComponentFixture<OrderServiceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderServiceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderServiceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
