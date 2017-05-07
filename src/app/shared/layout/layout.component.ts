import { Component, Input } from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  @Input() loadLeftPanel;
  @Input() loadRightPanel;

  // LEFT PANEL METHODS
  onSubmitLeftPanel($event){
    console.log("layout");
    console.log($event);
  }

  // RIGHT PANEL METHODS
}
