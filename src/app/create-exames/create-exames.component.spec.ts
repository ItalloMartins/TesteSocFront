import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamesComponent } from './create-exames.component';

describe('CreateExamesComponent', () => {
  let component: CreateExamesComponent;
  let fixture: ComponentFixture<CreateExamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
