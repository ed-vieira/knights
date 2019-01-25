import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteKnightComponent } from './delete-knight.component';

describe('DeleteKnightComponent', () => {
  let component: DeleteKnightComponent;
  let fixture: ComponentFixture<DeleteKnightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteKnightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteKnightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
