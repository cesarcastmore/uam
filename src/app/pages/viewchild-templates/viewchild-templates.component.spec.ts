import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildTemplatesComponent } from './viewchild-templates.component';

describe('ViewchildTemplatesComponent', () => {
  let component: ViewchildTemplatesComponent;
  let fixture: ComponentFixture<ViewchildTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchildTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
