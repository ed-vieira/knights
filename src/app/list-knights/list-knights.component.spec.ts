import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKnightsComponent } from './list-knights.component';

describe('ListKnightsComponent', () => {
  let component: ListKnightsComponent;
  let fixture: ComponentFixture<ListKnightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKnightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKnightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
