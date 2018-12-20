/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TvOnAirComponent } from './tvOnAir.component';

describe('TvOnAirComponent', () => {
  let component: TvOnAirComponent;
  let fixture: ComponentFixture<TvOnAirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvOnAirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvOnAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
