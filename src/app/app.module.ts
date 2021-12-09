import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TriviaComponent } from './trivia/trivia.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
{ path: 'trivia', component: TriviaComponent },
{ path: '', component: TriviaComponent },
{ path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    TriviaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
