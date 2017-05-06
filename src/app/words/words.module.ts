// Angular Libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Vendor Libraries
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Internal Dependencies
//import { SharedModule } from '../shared/shared.module';

// Module Components
import { WordsDetailViewComponent } from './words-detailview/words-detailview.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //SharedModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    WordsDetailViewComponent,
  ],
  exports: [
    WordsDetailViewComponent,
  ]
})

export class WordsModule {

}
