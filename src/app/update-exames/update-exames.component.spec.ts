import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExamesComponent } from './update-exames.component';

describe('UpdateExamesComponent', () => {
  let component: UpdateExamesComponent;
  let fixture: ComponentFixture<UpdateExamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateExamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
