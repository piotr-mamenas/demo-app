import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent {
  @Input() loadView;
  @Output() onSubmitLeftPanel = new EventEmitter();

  onSubmit($event){
    this.onSubmitLeftPanel.emit($event);
  }
}
