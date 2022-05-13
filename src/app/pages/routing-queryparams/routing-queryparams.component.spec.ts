import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingQueryparamsComponent } from './routing-queryparams.component';

describe('RoutingQueryparamsComponent', () => {
  let component: RoutingQueryparamsComponent;
  let fixture: ComponentFixture<RoutingQueryparamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingQueryparamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingQueryparamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
