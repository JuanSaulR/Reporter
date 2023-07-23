/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { New_reportComponent } from './new_report.component';

describe('New_reportComponent', () => {
  let component: New_reportComponent;
  let fixture: ComponentFixture<New_reportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ New_reportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(New_reportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
