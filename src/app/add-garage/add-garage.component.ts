import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstraintViolationList } from '../models/constraint-violation-list';
import { Garage } from '../models/garage';
import { GarageJsonld } from '../models/garage-jsonld';

@Component({
  selector: 'app-add-garage',
  templateUrl: './add-garage.component.html',
  styleUrls: ['./add-garage.component.scss']
})
export class AddGarageComponent implements OnInit {

  public garage: Garage = {
    name: "",
    street: undefined,
    streetComplement: undefined,
    postalCode: undefined,
    city: undefined,
    owner: "",
  };

  public violationList: ConstraintViolationList|null = null;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public submit(garage: Garage): void {
    this.httpClient.post<GarageJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/users', garage).subscribe({
      next: (createdGarage) => {
        // Use a html message (<div>) and ngIf to inform the user creation.
        this.router.navigate(['/listegarage']);

        // Redirect list / details
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 422) {
          this.violationList = err.error;
          // alert(this.violationList['hydra:description']);
        }  else {
          // Inform the user that an error occurred (display a better message then my example).
          alert(err.status + ' - An error occurred.');
        }
      },
    });
  }

}
