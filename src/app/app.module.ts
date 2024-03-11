import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// import { StoreModule } from '@ngrx/store';
// @ts-ignore
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {MainComponent} from './components/main/main.component';
import {MovieComponent} from './components/movie/movie.component';
// import {searcheReducer} from "./Reducers/search.reducer";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // StoreModule.forRoot({search: searcheReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
