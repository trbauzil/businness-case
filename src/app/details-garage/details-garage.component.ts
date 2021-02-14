import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GarageJsonld } from '../models/garage-jsonld';

@Component({
  selector: 'app-details-garage',
  templateUrl: './details-garage.component.html',
  styleUrls: ['./details-garage.component.scss']
})
export class DetailsGarageComponent implements OnInit {

  public garage: GarageJsonld|null = null;

  public details = true;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.httpClient.get<GarageJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/garages/' + params.id).subscribe({
        next: (garage: GarageJsonld) => {
          this.garage = garage;
        },
        error: (err: HttpErrorResponse) => {
          alert(err.status + ' - ' + err.statusText);
        },
      });
    });
  }

}
