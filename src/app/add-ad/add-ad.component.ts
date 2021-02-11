import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ad } from '../models/ad';
import { AdJsonld } from '../models/ad-jsonld';
import { ConstraintViolationList } from '../models/constraint-violation-list';

@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.component.html',
  styleUrls: ['./add-ad.component.scss']
})
export class AddAdComponent implements OnInit {

  public ad: Ad = {
    title: '',
    description: '',
    releaseYear: '',
    km: 0,
    price: '',
    brand: '',
    model: '',
    fuel: undefined,
    garage: '',
  };

  public violationList: ConstraintViolationList|null = null;


  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public submit(ad: Ad): void {
    this.httpClient.post<AdJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/listings', ad).subscribe({
      next: (createdAd) => {
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
