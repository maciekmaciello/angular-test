import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  affiliates: any;

  ngOnInit() {
    this.getTotal();
  }

  getTotal(): void {
    this.homeService.getAffiliates()
      .subscribe(res =>
        this.affiliates = res.data.affiliates
      );
  }

}
