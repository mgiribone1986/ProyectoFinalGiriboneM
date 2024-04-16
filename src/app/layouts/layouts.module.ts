import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { UsersComponent } from './dashboard/pages/users/users.component';
import {UsersModule} from './dashboard/pages/users/users.module'
import { SharedService } from '../shared.service';


@NgModule({
  declarations: [
    NavbarComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatSidenavModule, 
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    UsersModule,
  ],
  providers: [
    SharedService 
  ],
  exports: [
    NavbarComponent,
    ToolbarComponent,
    UsersComponent
  ]
})
export class LayoutsModule { }