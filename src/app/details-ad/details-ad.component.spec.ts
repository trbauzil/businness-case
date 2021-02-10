import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAdComponent } from './details-ad.component';

describe('DetailsAdComponent', () => {
  let component: DetailsAdComponent;
  let fixture: ComponentFixture<DetailsAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
