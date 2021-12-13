import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TriviaComponent } from './trivia/trivia.component';
import { Route, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TriviaQuestionComponent } from './trivia-question/trivia-question.component';
import { HttpClientModule } from  '@angular/common/http';

const routes: Route[] = [
{ path: 'trivia', component: TriviaComponent },
{ path: '', component: TriviaComponent },
{ path: '**', redirectTo: '' },
{ path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TriviaComponent,
    AboutComponent,
    TriviaQuestionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
