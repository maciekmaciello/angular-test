import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.scss']
})
export class AsideLeftComponent implements OnInit {

  @Input()
  menu: string[];

  constructor() {
  }

  ngOnInit() {
  }

}
