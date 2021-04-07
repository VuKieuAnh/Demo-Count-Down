import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCountDownComponent } from './demo-count-down.component';

describe('DemoCountDownComponent', () => {
  let component: DemoCountDownComponent;
  let fixture: ComponentFixture<DemoCountDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCountDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCountDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
