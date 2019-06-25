import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  isDisabledTrue: boolean = true;
  isDisabledFalse: boolean = false;

  firstName = 'Angular 6';

  // mat checbox
  // isChecked = true;

  empRecords1;
  empRecords2;
  countryRecords1;
  countryRecords2;

  // conditional visibilty
  isShow = false;

  empRecords = [
    {
      name: 'Akshay',
      isOnline: true
    },
    {
      name: 'Sunny',
      isOnline: true
    },
    {
      name: 'Ranbir',
      isOnline: false
    },
    {
      name: 'Amitabh',
      isOnline: true
    }
  ];

  // add DI - dependency injection for service
  constructor(private dataService: DataService, private countryService: CountryService) {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('in onInit hook');
    // get data from service
    this.empRecords1 = this.dataService.getEmployeeData();
    // console.log(this.empRecords1);

    // get data from http
    this.dataService.getEmployeeHttpData()
      .subscribe(data => this.empRecords2 = data);

    // get country data from service & http
    this.countryRecords1 = this.countryService.getCountryData();

    this.countryService.getCountryHttpData()
      .subscribe(data => this.countryRecords2 = data);
  }

  ngDoCheck() {
    console.log('in ngDoCheck hook');
  }

  /* 
  AfterContentInit() {
    console.log('in AfterContentInit hook');
  }

  AfterContentChecked() {
    console.log('in AfterContentChecked hook');
  }

  AfterViewInit() {
    console.log('in AfterViewInit hook');
  }

  AfterViewChecked() {
    console.log('in AfterViewChecked hook');
  } */
}
