import { Component, Input, OnInit } from '@angular/core';
import { AdJsonld } from '../models/ad-jsonld';

@Component({
  selector: 'app-last-ads',
  templateUrl: './last-ads.component.html',
  styleUrls: ['./last-ads.component.scss']
})
export class LastAdsComponent implements OnInit {

  @Input()
  public lastad: AdJsonld = {
    
    '@context': '',
    '@id': '',
    '@type': '',
    id: 0,
    title: '',
    description: '',
    releaseYear: '',
    km: 0,
    price: '',
    brand: '',
    model: '',
    fuel: '',
    garage: '',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
