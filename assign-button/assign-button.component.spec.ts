import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignButtonComponent } from './assign-button.component';

describe('AssignButtonComponent', () => {
  let component: AssignButtonComponent;
  let fixture: ComponentFixture<AssignButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
