import { Component, Input } from '@angular/core';

@Component({
  selector: 'left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent {
  @Input() loadView;
}
