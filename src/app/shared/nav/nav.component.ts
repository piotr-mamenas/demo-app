import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  public tabSelected : String = "";

  public routingOptions = [
    'Words',
    'Sentences',
    'Training',
    'Config',
  ];

  onClick(){
    console.log(this.tabSelected);
  }
}
