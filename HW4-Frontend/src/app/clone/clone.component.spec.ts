/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CloneComponent } from './clone.component';

describe('CloneComponent', () => {
  let component: CloneComponent;
  let fixture: ComponentFixture<CloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
