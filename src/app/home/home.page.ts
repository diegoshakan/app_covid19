import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  countries: any[] = [];
  loadCountries: any[] = [];
  val: any;

  constructor(private countriesService: CountriesService) {
  }

  ngOnInit() {
    this.getListCountries();
  }

  public getListCountries() {
    this.countriesService.getListCountries().subscribe(
      data => {
        this.countries = data as [];
        this.loadCountries = data as [];
      },
      error => {
        console.log(error);
      }
    );
  }

  initializeItems(): void {
    this.countries = this.loadCountries;
  }

  public search(event: any) {
    this.initializeItems();
    this.val = event.target.value;
    if (this.val && this.val.trim() !== '') {
      this.countries = this.countries.filter((item) => {
        return (item.country.toLowerCase().indexOf(this.val.toLowerCase()) > -1);
      });
    }
  }

  cleanSearchBar() {
    this.val = '';
    this.initializeItems();
    return this.val;
  }
}
