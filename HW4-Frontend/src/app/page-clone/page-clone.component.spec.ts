/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageCloneComponent } from './page-clone.component';

describe('PageCloneComponent', () => {
  let component: PageCloneComponent;
  let fixture: ComponentFixture<PageCloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
