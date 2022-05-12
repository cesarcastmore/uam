import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmComponentComponent } from './npm-component.component';

describe('NpmComponentComponent', () => {
  let component: NpmComponentComponent;
  let fixture: ComponentFixture<NpmComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpmComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
