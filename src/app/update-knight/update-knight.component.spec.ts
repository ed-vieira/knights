import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKnightComponent } from './update-knight.component';

describe('UpdateKnightComponent', () => {
  let component: UpdateKnightComponent;
  let fixture: ComponentFixture<UpdateKnightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateKnightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateKnightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
