import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdJsonld } from '../models/ad-jsonld';

@Component({
  selector: 'app-details-ad',
  templateUrl: './details-ad.component.html',
  styleUrls: ['./details-ad.component.scss']
})
export class DetailsAdComponent implements OnInit {

  public ad: AdJsonld|null = null;

  public details = true;

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

}
