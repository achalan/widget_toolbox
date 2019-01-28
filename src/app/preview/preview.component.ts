import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/zShared/data.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit {
  currentState: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getState.subscribe(data => {
      this.currentState = data;
    });
  }

}
