import { Component, OnInit } from '@angular/core';
import {UserJsonld} from '../models/user-jsonld';
import {User} from '../models/user';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ConstraintViolationList} from '../models/constraint-violation-list';
import {Router} from '@angular/router';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public user: User = {
    email: '',
    firstName: '',
    lastName: '',
    phone: undefined,
    siret: undefined,
    garages: [],
  };

  public violationList: ConstraintViolationList|null = null;


  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public submit(user: User): void {
    this.httpClient.post<UserJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/users', user).subscribe({
      next: (createdUser) => {
        // Use a html message (<div>) and ngIf to inform the user creation.
        // alert('User ' + createdUser['@id'] + ' created.');

        // Redirect list / details
        this.router.navigate(['/']);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 422) {
          this.violationList = err.error;
          // alert(this.violationList['hydra:description']);
        } else {
          // Inform the user that an error occurred (display a better message then my example).
          alert(err.status + ' - An error occurred.');
        }
      },
    });
  }

}
