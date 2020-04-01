import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  countries: any[] = [];
  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    this.getListCountries();
  }

  public getListCountries() {
    this.countriesService.getListCountries().subscribe(
      data => {
        this.countries = data as [];
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
