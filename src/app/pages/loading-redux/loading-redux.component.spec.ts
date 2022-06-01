import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingReduxComponent } from './loading-redux.component';

describe('LoadingReduxComponent', () => {
  let component: LoadingReduxComponent;
  let fixture: ComponentFixture<LoadingReduxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingReduxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
