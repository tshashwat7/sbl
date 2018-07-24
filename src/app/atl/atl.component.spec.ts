import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlComponent } from './atl.component';

describe('AtlComponent', () => {
  let component: AtlComponent;
  let fixture: ComponentFixture<AtlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
