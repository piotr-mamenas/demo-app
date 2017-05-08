import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Word } from '../../model/Word';
import { WordValidators } from '../../validators/WordValidators';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'words-detailview',
  templateUrl: './words-detailview.component.html',
  styleUrls: ['./words-detailview.component.css']
})
export class WordsDetailViewComponent {
  wordForm : FormGroup;
  @Output() onSubmitDetailView = new EventEmitter();
  model : Word = new Word(0,'','','');

  userAction = 'Add Word';
  isLoading = true;

  constructor(private fb: FormBuilder){
    this.createForm()
    this.isLoading = false;
  }

  createForm() {
    this.wordForm = this.fb.group({
      english: ['', Validators.compose([Validators.required,
                                        WordValidators.cannotContainSpace])],
      german: ['', Validators.compose([Validators.required,
                                       WordValidators.cannotContainSpace])],
      type: ['', Validators.required]
    });
  }

  types = [
    'Verb',
    'Noun',
    'Adjective'];

  onSubmit(form){
    this.model.id = 0;
    this.model.english = form.value.english;
    this.model.german = form.value.german;
    this.model.type = form.value.type;
    this.onSubmitDetailView.emit(this.model);
  }
}
