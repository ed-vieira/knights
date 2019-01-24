import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetKnightComponent } from './get-knight.component';

describe('GetKnightComponent', () => {
  let component: GetKnightComponent;
  let fixture: ComponentFixture<GetKnightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetKnightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetKnightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
