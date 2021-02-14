import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { UserJsonld } from 'src/app/models/user-jsonld';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConstraintViolationList} from '../../models/constraint-violation-list';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {


  @Input()
  public user: User|null = null;

  @Input()
  public details = false;

  @Input()
  public violationList: ConstraintViolationList|null = null;

  @Output()
  public formSubmit = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  public submit(): void {
    if (this.user !== null) {
      this.formSubmit.emit(this.user);
    }
  }

  public retrieveErrors(fieldName: string): Array<string> {
    const arr: Array<string> = [];

    if (this.violationList !== null) {
      for (const err of this.violationList.violations) {
        if (err.propertyPath === fieldName) {
          arr.push(err.message);
        }
      }
    }

    return arr;
  }

}
