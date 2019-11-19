import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent implements OnInit {
  // number: number;
  fontSize = 14;

  constructor() {
  }

  ngOnInit() {
  }

  onChange(value) {
    this.fontSize = value;
  }
}
