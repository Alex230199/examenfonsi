import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pista } from './pista';

describe('Pista', () => {
  let component: Pista;
  let fixture: ComponentFixture<Pista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pista],
    }).compileComponents();

    fixture = TestBed.createComponent(Pista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
