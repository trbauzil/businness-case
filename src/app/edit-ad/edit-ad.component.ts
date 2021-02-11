import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ad } from '../models/ad';
import { AdJsonld } from '../models/ad-jsonld';
import { ConstraintViolationList } from '../models/constraint-violation-list';

@Component({
  selector: 'app-edit-ad',
  templateUrl: './edit-ad.component.html',
  styleUrls: ['./edit-ad.component.scss']
})
export class EditAdComponent implements OnInit {

  public ad: AdJsonld|null = null;

  public violationList: ConstraintViolationList|null = null;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit(): void {
        this.activatedRoute.params.subscribe((params) => {
          this.httpClient.get<AdJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/listings/' + params.id).subscribe({
            next: (ad: AdJsonld) => {
              this.ad = ad;
            },
            error: (err: HttpErrorResponse) => {
              alert(err.status + ' - ' + err.statusText);
            },
          });
        });
  }

  public submit(ad: Ad): void {
    this.httpClient.put<AdJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/listings/' + this.ad?.id, ad).subscribe({
      next: (createdAd) => {
        this.router.navigate(['/listead']);
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
