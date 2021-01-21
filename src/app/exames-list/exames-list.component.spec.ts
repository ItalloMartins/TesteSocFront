import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamesListComponent } from './exames-list.component';

describe('ExamesListComponent', () => {
  let component: ExamesListComponent;
  let fixture: ComponentFixture<ExamesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
