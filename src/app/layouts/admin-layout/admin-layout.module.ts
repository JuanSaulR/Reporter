import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeesListComponent } from 'src/app/components/employees/employees-list/employees-list.component';
import { EditEmployeeComponent } from 'src/app/components/employees/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from 'src/app/components/employees/add-employee/add-employee.component';
import { ReportListComponent } from 'src/app/components/reports/report-list/report-list.component';
import { CreateReportComponent } from 'src/app/components/reports/create-report/create-report.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    NgxDropzoneModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ReportListComponent,
    CreateReportComponent
  ]
})

export class AdminLayoutModule {}
