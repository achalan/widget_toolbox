import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ShellComponent } from './shell/shell.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DragulaModule } from 'ng2-dragula';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';
import { PreviewComponent } from './preview/preview.component';
import { AppRoutingModule } from 'src/app/app.routing.module';

import { APP_BASE_HREF } from '@angular/common';
import { DataService } from 'src/app/zShared/data.service';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: false
    }),
    ReactiveFormsModule, DragulaModule.forRoot(), AppRoutingModule],
  declarations: [AppComponent, HelloComponent, ShellComponent, SidebarComponent, NavbarComponent, PreviewComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, DataService]
})



export class AppModule {


}
