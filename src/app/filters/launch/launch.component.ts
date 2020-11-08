import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css'],
})
export class LaunchComponent implements OnInit {
  launch_success = '';
  @Input() selectedlaunch: string | null;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  launchHandler(launch) {
    this.router.navigate(['/layout'], {
      queryParams: { launch },
      queryParamsHandling: 'merge',
    });
  }
}
