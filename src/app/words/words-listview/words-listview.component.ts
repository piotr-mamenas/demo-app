import { Component } from '@angular/core';
import { Word } from '../../model/Word';

@Component({
  selector: 'words-listview',
  templateUrl: './words-listview.component.html',
  styleUrls: ['./words-listview.component.css']
})
export class WordsListViewComponent {
  rows = [];
  columns = [
    { prop: 'Id' },
    { name: 'English' },
    { name: 'German' },
    { name: 'Type' }
  ];

  dropdownValue = [
    'Verb',
    'Noun',
    'Adjective'];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/words.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
}
