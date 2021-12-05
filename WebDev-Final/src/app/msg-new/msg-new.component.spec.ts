/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MsgNewComponent } from './msg-new.component';

describe('MsgNewComponent', () => {
  let component: MsgNewComponent;
  let fixture: ComponentFixture<MsgNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
