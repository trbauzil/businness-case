import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GarageCollection } from '../models/garage-collection';
import { GarageJsonld } from '../models/garage-jsonld';

@Component({
  selector: 'app-liste-garage',
  templateUrl: './liste-garage.component.html',
  styleUrls: ['./liste-garage.component.scss']
})
export class ListeGarageComponent implements OnInit {

  public garages: Array<GarageJsonld> = [];
  
  public prevLink: string|null = null;
  public nextLink: string|null = null;

  public lastPage: number|null = null;

  public filter = {
    name: '',
    city: '',
  }

  constructor(private httpClient: HttpClient,) { 

  }

  ngOnInit(): void {
    this.loadPage('/api/garages?page=1');
  }

  public loadNextPage(): void {
    this.loadPage(this.nextLink)
  }

  public loadPrevPage(): void {
    this.loadPage(this.prevLink);    
  }

  public loadPageByNumber(pageNumber: number): void{
    this.applyFilters(pageNumber);
  }

  public get getPageNumbers(): Array<number> {
    const arr: Array<number> = [];

    if(this.lastPage !== null){
      for (let i = 1; i <= this.lastPage; i++){
        arr.push(i);
      }
    }
    
    return arr;
  }

  public applyFilters(page: number = 1): void{
    let url = '/api/garages?page=' + page;

    if (this.filter.name !== '') {
      url += '&name=' + this.filter.name;
    }

    if (this.filter.city !== '') {
      url += '&city=' + this.filter.city;
    }

    this.loadPage(url);
    
  }


  private loadPage(link: string|null): void {
    if (link !== null){
      this.httpClient.get<GarageCollection>('https://hb-bc-dwwm-2020.deploy.this-serv.com' + link).subscribe((data) => {
        this.garages = data['hydra:member'];

        if( data['hydra:view']['hydra:next'] !== undefined){
          this.nextLink = data['hydra:view']['hydra:next'];
        } else {
          this.nextLink = null;
        }
        if( data['hydra:view']['hydra:previous'] !== undefined){
          this.prevLink = data['hydra:view']['hydra:previous'];
        } else {
          this.prevLink = null;
        }

        if( data['hydra:view']['hydra:last'] !== undefined){
          const regex = /\?.*page=([0-9]+).*/;
          const str = data['hydra:view']['hydra:last'];

          const matches = str.match(regex);

          if (matches === null){
            this.lastPage = null;
          } else {
            this.lastPage = parseInt(matches[1]);
          }
          
        } else {
          this.lastPage = null;
        }
    });
    }
  }

}
