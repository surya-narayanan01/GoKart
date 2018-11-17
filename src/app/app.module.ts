import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GokartListComponent } from './gokart-list/gokart-list.component';
import { ConvertToSpacesPipe } from './gokart-list/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GokartListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
