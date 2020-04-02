import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountryDetailPage } from './country-detail.page';

describe('CountryDetailPage', () => {
  let component: CountryDetailPage;
  let fixture: ComponentFixture<CountryDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountryDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
