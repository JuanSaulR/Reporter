/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Reports_dashboardComponent } from './reports_dashboard.component';

describe('Reports_dashboardComponent', () => {
  let component: Reports_dashboardComponent;
  let fixture: ComponentFixture<Reports_dashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reports_dashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reports_dashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
