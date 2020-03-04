import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLive2dComponent } from './ng-live2d.component';

describe('NgLive2dComponent', () => {
  let component: NgLive2dComponent;
  let fixture: ComponentFixture<NgLive2dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgLive2dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLive2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
