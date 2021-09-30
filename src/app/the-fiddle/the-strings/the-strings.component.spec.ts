import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheStringsComponent } from './the-strings.component';

describe('TheStringsComponent', () => {
  let component: TheStringsComponent;
  let fixture: ComponentFixture<TheStringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheStringsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheStringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
