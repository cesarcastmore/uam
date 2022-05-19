import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinOperatorsComponent } from './join-operators.component';

describe('JoinOperatorsComponent', () => {
  let component: JoinOperatorsComponent;
  let fixture: ComponentFixture<JoinOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinOperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
