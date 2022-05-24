import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateNgContainerComponent } from './template-ng-container.component';

describe('TemplateNgContainerComponent', () => {
  let component: TemplateNgContainerComponent;
  let fixture: ComponentFixture<TemplateNgContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateNgContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateNgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
