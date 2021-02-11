import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConstraintViolationList } from 'src/app/models/constraint-violation-list';
import { Garage } from 'src/app/models/garage';
import { GarageJsonld } from 'src/app/models/garage-jsonld';

@Component({
  selector: 'app-garage-form',
  templateUrl: './garage-form.component.html',
  styleUrls: ['./garage-form.component.scss']
})
export class GarageFormComponent implements OnInit {

  @Input()
  public garage: Garage|null = null;

  @Input()
  public violationList: ConstraintViolationList|null = null;

  @Output()
  public formSubmit = new EventEmitter<Garage>();

  constructor(private httpClient: HttpClient,) { }

  ngOnInit(): void {
  }

  public submit(): void {
    if (this.garage !== null) {
      this.formSubmit.emit(this.garage);
    }
  }
}
