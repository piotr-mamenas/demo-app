import { Component } from '@angular/core';
import { Word } from '../../model/Word';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'words-detailview',
  templateUrl: './words-detailview.component.html',
  styleUrls: ['./words-detailview.component.css']
})
export class WordsDetailViewComponent {
  wordForm : FormGroup;

  constructor(private fb: FormBuilder){
    this.createForm();
  }

  createForm() {
    this.wordForm = this.fb.group({
      english: ['', Validators.required],
      german: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  dropdownValue = [
    'Verb',
    'Noun',
    'Adjective'];

  onSubmit(form){
  }

  onDropdownClick(selectedValue){
    //this.wordForm. = this.dropdownValue[selectedValue];
    console.log(this.wordForm);
    this.wordForm.value.type = this.dropdownValue[selectedValue];
  }
}
