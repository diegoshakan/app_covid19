import { Component, OnInit } from "@angular/core";
import { CountriesService } from "../services/countries.service";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  countries$: Observable<any[]> = of([]);
  loadCountries: Observable<any[]> = of([]);
  val: any;

  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    this.getListCountries();
  }

  public getListCountries() {
    this.countries$ = this.countriesService.getListCountries() as Observable<
      any[]
    >;
    this.loadCountries = this.countriesService.getListCountries() as Observable<
      any[]
    >;
  }

  initializeItems(): void {
    this.countries$ = this.loadCountries;
  }

  public search(event: any) {
    this.initializeItems();
    this.val = event.target.value;
    if (this.val && this.val.trim() !== "") {
      this.countries$ = this.countries$.pipe(
        map((contries) =>
          contries.filter(
            ({ country }) =>
              country.toLowerCase().indexOf(this.val.toLowerCase()) > -1
          )
        )
      );
    }
  }

  cleanSearchBar() {
    this.val = "";
    this.initializeItems();
    return this.val;
  }
}
