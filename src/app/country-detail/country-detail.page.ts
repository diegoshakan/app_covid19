import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.page.html',
  styleUrls: ['./country-detail.page.scss'],
})
export class CountryDetailPage implements OnInit {
  countryDetail: any;

  constructor(private countriesService: CountriesService, private route: ActivatedRoute) { }

  ngOnInit() {
    const country = this.route.snapshot.paramMap.get('country');
    this.countriesService.getCountryDetail(country).subscribe(
      data => {
        this.countryDetail = [data];
      },
      error => {
        console.log(error);
      }
    );
  }

  public formatDate(dateUpdate) {
    const date: any = new Date(dateUpdate);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.toLocaleTimeString();
    const dateFormat = `${day}/${month + 1}/${year} - ${hour}`;
    return dateFormat;
  }
}
