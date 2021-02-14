import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ad } from 'src/app/models/ad';
import { ConstraintViolationList } from 'src/app/models/constraint-violation-list';

@Component({
  selector: 'app-ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.scss']
})
export class AdFormComponent implements OnInit {

  @Input()
  public ad: Ad|null = null;

  @Input()
  public details = false;

  @Input()
  public violationList: ConstraintViolationList|null = null;

  @Output()
  public formSubmit = new EventEmitter<Ad>();

  constructor() { }

  ngOnInit(): void {
  }

  public submit(): void {
    console.log(this.ad);
    
    if (this.ad !== null) {
      this.formSubmit.emit(this.ad);
    }
  }
}
