import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbloginsComponent } from './fblogins.component';

describe('FbloginsComponent', () => {
  let component: FbloginsComponent;
  let fixture: ComponentFixture<FbloginsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbloginsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbloginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
