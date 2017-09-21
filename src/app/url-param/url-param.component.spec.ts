import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlParamComponent } from './url-param.component';

describe('UrlParamComponent', () => {
  let component: UrlParamComponent;
  let fixture: ComponentFixture<UrlParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
