import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { WordsComponent } from './words.component';

export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'Words', component: WordsComponent },
  { path: '**', component: NotFoundComponent },
]);
