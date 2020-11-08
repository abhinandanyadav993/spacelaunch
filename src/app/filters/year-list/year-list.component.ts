import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-year-list',
  templateUrl: './year-list.component.html',
  styleUrls: ['./year-list.component.css'],
})
export class YearListComponent implements OnInit {
  start_launch_year = 2006;
  end_launch_year = new Date().getFullYear();
  launch_years = [];

  @Input() activeYear: string | null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    for (let i = this.start_launch_year; i <= this.end_launch_year; ++i) {
      this.launch_years.push(i);
    }
  }

  filterYear(year) {
    this.router.navigate(['/layout'], { queryParams: { year }, queryParamsHandling: 'merge'});
  }
}
