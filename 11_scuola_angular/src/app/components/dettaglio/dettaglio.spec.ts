import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dettaglio } from './dettaglio';

describe('Dettaglio', () => {
  let component: Dettaglio;
  let fixture: ComponentFixture<Dettaglio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dettaglio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dettaglio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
