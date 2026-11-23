import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoperrosComponent } from './listadoperros';


describe('Listadoperros', () => {
  let component: ListadoperrosComponent;
  let fixture: ComponentFixture<ListadoperrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoperrosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoperrosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
