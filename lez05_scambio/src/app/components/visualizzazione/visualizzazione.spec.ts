import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visualizzazione } from './visualizzazione';

describe('Visualizzazione', () => {
  let component: Visualizzazione;
  let fixture: ComponentFixture<Visualizzazione>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Visualizzazione]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visualizzazione);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
