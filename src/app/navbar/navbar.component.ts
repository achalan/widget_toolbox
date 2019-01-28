import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from './../zShared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [DataService]
})
export class NavbarComponent implements OnInit {
  state: any;

  constructor(private ToastrService: ToastrService,
    private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
  }



  exportToJson() {
    console.log("Expoting to json", this.state);
    this.ToastrService.success("Exported the configuration to JSON successfully");


    this.router.navigate(["/preview"]);
  }

}