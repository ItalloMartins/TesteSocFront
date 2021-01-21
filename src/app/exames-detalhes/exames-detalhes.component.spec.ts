import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamesDetalhesComponent } from './exames-detalhes.component';

describe('ExamesDetalhesComponent', () => {
  let component: ExamesDetalhesComponent;
  let fixture: ComponentFixture<ExamesDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamesDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamesDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
