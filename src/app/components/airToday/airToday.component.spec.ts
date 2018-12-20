/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AirTodayComponent } from './airToday.component';

describe('AirTodayComponent', () => {
  let component: AirTodayComponent;
  let fixture: ComponentFixture<AirTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
