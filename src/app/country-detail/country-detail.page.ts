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
  countryDetailName: any;

  constructor(private countriesService: CountriesService, private route: ActivatedRoute) { }

  ngOnInit() {
    const country = this.route.snapshot.paramMap.get('country');
    this.countriesService.getCountryDetail(country).subscribe(
      data => {
        console.log('data:', data);
        this.countryDetail = [data];
      },
      error => {
        console.log(error);
      }
    );
  }

  formatDate(dateUpdate) {
    let date: any = new Date(dateUpdate);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.toLocaleTimeString();
    let dateFormat = `${day}/${month + 1}/${year} - ${hour}`;
    return dateFormat;
  }


}
