import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGarageComponent } from './liste-garage.component';

describe('ListeGarageComponent', () => {
  let component: ListeGarageComponent;
  let fixture: ComponentFixture<ListeGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeGarageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
