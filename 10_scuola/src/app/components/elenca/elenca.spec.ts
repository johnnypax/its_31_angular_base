import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elenca } from './elenca';

describe('Elenca', () => {
  let component: Elenca;
  let fixture: ComponentFixture<Elenca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Elenca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elenca);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
