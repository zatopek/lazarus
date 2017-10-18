import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { CreateGameComponent } from './game/create/creategame.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    CreateGameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'game', component: GameComponent },
      { path: 'game/create', component: CreateGameComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
