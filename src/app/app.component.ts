import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  constructor(private dragulaService: DragulaService) {
    dragulaService.createGroup("PAGE_DESIGNER", {
      removeOnSpill: true,
      revertOnSpill: true,
      copy: true,
      ignoreInputTextSelection: true
    });
  }
}
