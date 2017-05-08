// Angular Libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Vendor Libraries
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SpinnerModule } from 'angular2-spinner';

// Module Components
import { WordsDetailViewComponent } from './words-detailview/words-detailview.component';
import { WordsListViewComponent } from './words-listview/words-listview.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    SpinnerModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    WordsDetailViewComponent,
    WordsListViewComponent
  ],
  exports: [
    WordsDetailViewComponent,
    WordsListViewComponent
  ]
})

export class WordsModule {

}
