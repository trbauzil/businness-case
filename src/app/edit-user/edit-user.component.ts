import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {UserJsonld} from '../models/user-jsonld';
import {User} from '../models/user';
import {ConstraintViolationList} from '../models/constraint-violation-list';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public user: UserJsonld|null = null;

  public violationList: ConstraintViolationList|null = null;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit(): void {
        // Retrieve params from path URL (defined in app-routing.module.ts).
        this.activatedRoute.params.subscribe((params) => {
          // params.YOUR_VAR
          this.httpClient.get<UserJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/users/' + params.id).subscribe({
            next: (user: UserJsonld) => {
              this.user = user;
            },
            error: (err: HttpErrorResponse) => {
              // You have to handle error better than this ;) .
              alert(err.status + ' - ' + err.statusText);
            },
          });
        });
  }

  public submit(user: User): void {
    this.httpClient.put<UserJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/users/' + this.user?.id, user).subscribe({
      next: (createdUser) => {
        this.router.navigate(['/']);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 422) {
          this.violationList = err.error;
        } else {
          alert(err.status + ' - An error occurred.');
        }
      },
    });
  }

}
