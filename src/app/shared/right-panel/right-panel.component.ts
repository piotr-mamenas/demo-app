import { Component, Input } from '@angular/core';

@Component({
  selector: 'right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent {
  @Input() loadView;
}
