import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/Report';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {
  reports: Report[] = [];
  constructor() { }

  ngOnInit() {
  }

}
