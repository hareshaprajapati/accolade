import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {GrowerComponent} from './grower/grower.component';
import {PatchComponent} from './patch/patch.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {JsonDataService} from './service/json-data.service';
import {GrowerSearchComponent} from './grower/grower-search/grower-search.component';
import {MatButtonModule, MatDialogModule, MatInputModule, MatRippleModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GrowerComponent,
    PatchComponent,
    GrowerSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [JsonDataService],
  bootstrap: [AppComponent],
  entryComponents: [GrowerSearchComponent]


})
export class AppModule { }
