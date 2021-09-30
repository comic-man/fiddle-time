import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheFiddleComponent } from './the-fiddle.component';

describe('TheFiddleComponent', () => {
  let component: TheFiddleComponent;
  let fixture: ComponentFixture<TheFiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheFiddleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheFiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
