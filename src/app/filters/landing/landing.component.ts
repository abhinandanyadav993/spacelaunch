import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  @Input() selectedlanding: string | null;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  launchHandler(landing) {
    this.router.navigate(['/layout'], {
      queryParams: { landing },
      queryParamsHandling: 'merge',
    });
  }
}
