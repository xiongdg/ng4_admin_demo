import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlParam2Component } from './url-param2.component';

describe('UrlParam2Component', () => {
  let component: UrlParam2Component;
  let fixture: ComponentFixture<UrlParam2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlParam2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlParam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
