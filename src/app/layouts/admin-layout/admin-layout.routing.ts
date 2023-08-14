import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { EmployeesListComponent } from 'src/app/components/employees/employees-list/employees-list.component';
import { EditEmployeeComponent } from 'src/app/components/employees/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from 'src/app/components/employees/add-employee/add-employee.component';
import { ReportListComponent } from 'src/app/components/reports/report-list/report-list.component';
import { CreateReportComponent } from 'src/app/components/reports/create-report/create-report.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'employees',      component: EmployeesListComponent },
    { path: 'employees/add',  component: AddEmployeeComponent },
    { path: 'employees/edit/:id',  component: EditEmployeeComponent },
    { path: 'reports',        component: ReportListComponent},
    { path: 'reports/add',    component: CreateReportComponent}
];
