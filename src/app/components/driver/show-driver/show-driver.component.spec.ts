import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDriverComponent } from './show-driver.component';

describe('ShowDriverComponent', () => {
  let component: ShowDriverComponent;
  let fixture: ComponentFixture<ShowDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
