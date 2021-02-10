import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdComponent } from './liste-ad.component';

describe('ListeAdComponent', () => {
  let component: ListeAdComponent;
  let fixture: ComponentFixture<ListeAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
