import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pageTitle = 'Header Page';

  showTitle() {
    return this.pageTitle;
  }

  constructor() { }

  ngOnInit() {
  }
}
