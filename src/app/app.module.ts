// Angular Libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Module Components
import { AppComponent } from './app.component';

// Navigation Components
import { WordsComponent } from './words.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

// Internal Modules
import { WordsModule } from './words/words.module';
import { SentencesModule } from './sentences/sentences.module';
import { TrainingModule } from './training/training.module';
import { ConfigModule } from './config/config.module';
import { SharedModule } from './shared/shared.module';

import { routing } from './app.routing';

// Vendor Libraries
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    WordsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WordsModule,
    SentencesModule,
    TrainingModule,
    ConfigModule,
    SharedModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
