import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {GarageJsonld} from '../models/garage-jsonld';
import {Garage} from '../models/garage';
import {ConstraintViolationList} from '../models/constraint-violation-list';


@Component({
  selector: 'app-edit-garage',
  templateUrl: './edit-garage.component.html',
  styleUrls: ['./edit-garage.component.scss']
})
export class EditGarageComponent implements OnInit {

  public garage: GarageJsonld|null = null;

  public violationList: ConstraintViolationList|null = null;

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

  public submit(garage: Garage): void {
    this.httpClient.put<GarageJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/garages/' + this.garage?.id, garage).subscribe({
      next: (createdGarage) => {
        this.router.navigate(['/listegarage']);
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
