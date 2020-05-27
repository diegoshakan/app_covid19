import { Component, OnInit } from "@angular/core";
import { CountriesService } from "../services/countries.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-country-detail",
  templateUrl: "./country-detail.page.html",
  styleUrls: ["./country-detail.page.scss"],
})
export class CountryDetailPage implements OnInit {
  countryDetail$: Observable<any>;

  constructor(
    private countriesService: CountriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.countryDetail$ = this.route.params.pipe(
      switchMap(({ country }) =>
        this.countriesService.getCountryDetail(country)
      )
    );
  }
}
