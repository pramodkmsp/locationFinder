import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  value: number;
  results: any;
  resultsLength: number;
  errorResponse: any;
  constructor (
    private elementRef: ElementRef, 
    private locationService: LocationService
    ) {}
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('input')
    .addEventListener('', this.onEnter);
  }

  onEnter(event) {
    console.log(event);
    this.value = event.target.value;
    this.getLocationZipcode();
  }

  getLocationZipcode() {
    this.locationService.getLocationZipcodeByCountryCode(this.value)
    .subscribe(result => {
      this.results = result;
      this.resultsLength = Object.keys(this.results).length;
      this.errorResponse = '';
    },
    error => {
      if (error instanceof HttpErrorResponse) {
        this.errorResponse = 'Please enter a valid zipcode';
      }
    }
    );
  }
}
