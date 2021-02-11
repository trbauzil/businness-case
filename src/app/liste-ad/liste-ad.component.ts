import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdCollection } from '../models/ad-collection';
import { AdJsonld } from '../models/ad-jsonld';

@Component({
  selector: 'app-liste-ad',
  templateUrl: './liste-ad.component.html',
  styleUrls: ['./liste-ad.component.scss']
})
export class ListeAdComponent implements OnInit {

  public ads: Array<AdJsonld> = [];

  public prevLink: string|null = null;
  public nextLink: string|null = null;

  public lastPage: number|null = null;

  public filter = {
    title: '',
    brand: '',
  }

  constructor(private httpClient: HttpClient,) {
    
   }

  ngOnInit(): void {
    this.loadPage('/api/listings?page=1');
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
    let url = '/api/listings?page=' + page;

    if (this.filter.title !== '') {
      url += '&title=' + this.filter.title;
    }

    if (this.filter.brand !== '') {
      url += '&brand=' + this.filter.brand;
    }

    this.loadPage(url);
    
  }

  private loadPage(link: string|null): void {
    if (link !== null){
      this.httpClient.get<AdCollection>('https://hb-bc-dwwm-2020.deploy.this-serv.com' + link).subscribe((data) => {
        this.ads = data['hydra:member'];

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
