// Angular Libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Module Components
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { LayoutComponent } from './layout/layout.component';

// Internal Dependencies
import { WordsModule } from '../words/words.module';
import { SentencesModule } from '../sentences/sentences.module';
import { TrainingModule } from '../training/training.module';
import { ConfigModule } from '../config/config.module';
import { routing } from '../app.routing';

// Vendor Libraries
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WordsModule,
    SentencesModule,
    TrainingModule,
    ConfigModule,
    routing,
    NgbModule.forRoot(),
  ],
  declarations: [
    LeftPanelComponent,
    RightPanelComponent,
    FooterComponent,
    NavComponent,
    LayoutComponent,
  ],
  exports: [
    LeftPanelComponent,
    RightPanelComponent,
    FooterComponent,
    NavComponent,
    LayoutComponent,
  ]
})

export class SharedModule {

}
