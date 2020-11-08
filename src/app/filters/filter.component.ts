import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
@Input() activeYear: string | null ;
@Input()selectedlaunch: string | null;
@Input()selectedlanding: string | null;
  constructor() { }

  ngOnInit(): void {
  }

}
