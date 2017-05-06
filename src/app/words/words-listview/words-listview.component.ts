import { Component, OnInit } from '@angular/core';
import { Word } from '../../model/Word';

@Component({
  selector: 'words-listview',
  templateUrl: './words-listview.component.html',
  styleUrls: ['./words-listview.component.css']
})
export class WordsListViewComponent implements OnInit {
  rows = [];

  columns = [
    { prop: 'Id' },
    { prop: 'English' },
    { prop: 'German' },
    { prop: 'Type' }
  ];

  dropdownValue = [
    'Verb',
    'Noun',
    'Adjective'];

  ngOnInit() {
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
