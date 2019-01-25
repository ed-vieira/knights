import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHeroComponent } from './get-hero.component';

describe('GetHeroComponent', () => {
  let component: GetHeroComponent;
  let fixture: ComponentFixture<GetHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
