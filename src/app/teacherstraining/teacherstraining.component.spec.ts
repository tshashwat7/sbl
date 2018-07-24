import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherstrainingComponent } from './teacherstraining.component';

describe('TeacherstrainingComponent', () => {
  let component: TeacherstrainingComponent;
  let fixture: ComponentFixture<TeacherstrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherstrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherstrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
