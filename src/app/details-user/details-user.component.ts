import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserJsonld } from '../models/user-jsonld';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.scss']
})
export class DetailsUserComponent implements OnInit {

  public user: UserJsonld|null = null;

  public details = true;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.httpClient.get<UserJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/users/' + params.id).subscribe({
        next: (user: UserJsonld) => {
          this.user = user;
        },
        error: (err: HttpErrorResponse) => {
          alert(err.status + ' - ' + err.statusText);
        },
      });
    });
  }

}
