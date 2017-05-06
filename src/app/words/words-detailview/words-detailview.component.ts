import { Component } from '@angular/core';
import { Word } from '../../model/Word';

@Component({
  selector: 'words-detailview',
  templateUrl: './words-detailview.component.html',
  styleUrls: ['./words-detailview.component.css']
})
export class WordsDetailViewComponent {
  model = new Word(1,'','','');

  dropdownValue = [
    'Verb',
    'Noun',
    'Adjective'];

  onSubmit(form){
    this.model = form.value;
  }

  onDropdownClick(selectedValue){
    this.model.type = this.dropdownValue[selectedValue];
  }
}
