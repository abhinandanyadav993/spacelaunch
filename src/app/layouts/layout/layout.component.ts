import { HttpService } from './../../shared/http.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  activeYear: string | null;
  selectedlaunch: string | null;
  selectedlanding: string | null;

  dataSource: any = [];
  payload = { limit: 100 };
  launch_year = '';
  launch_success = '';
  land_success = '';
  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.activeYear = params.get('year');
      this.selectedlaunch = params.get('launch');
      this.selectedlanding = params.get('landing');
      this.filterSpace({launch_year: this.activeYear, launch_success: this.selectedlaunch, land_success: this.selectedlanding })
    });
  }



  filterSpace(filter = {}) {
    if ('launch_year' in filter) {
      this.launch_year = filter['launch_year'];
    } else if ('launch_success' in filter) {
      this.launch_success = filter['launch_success'];
    } else if ('land_success' in filter) {
      this.land_success = filter['land_success'];
    }
    this.filteredData(filter)
      .then((data) => {
        this.dataSource = data;
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  private filteredData(filter) {
    return new Promise((resolve, reject) => {
      this.payload = { ...this.payload, ...filter };
      this.httpService.get('launches', this.payload).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
