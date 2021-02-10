import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserCollection } from '../models/user-collection';
import { UserJsonld } from '../models/user-jsonld';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.scss']
})
export class ListeUserComponent implements OnInit {

  public users: Array<UserJsonld> = [];

  public prevLink: string|null = null;
  public nextLink: string|null = null;

  public lastPage: number|null = null;

  public filter = {
    email: '',
    lastName: '',
  }

  constructor(private httpClient: HttpClient,) {
    
   }

  ngOnInit(): void {
    this.loadPage('/api/users?page=1');
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
    let url = '/api/users?page=' + page;

    if (this.filter.lastName !== '') {
      url += '&lastName=' + this.filter.lastName;
    }

    if (this.filter.email !== '') {
      url += '&email=' + this.filter.email;
    }

    this.loadPage(url);
    
  }

  private loadPage(link: string|null): void {
    if (link !== null){
      this.httpClient.get<UserCollection>('https://hb-bc-dwwm-2020.deploy.this-serv.com' + link).subscribe((data) => {
        this.users = data['hydra:member'];

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
