import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PopulationDataComponent } from './population-data/population-data.component';
import { PopulationDataDetailComponent } from './population-data-detail/population-data-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PopulationDataComponent,
    PopulationDataDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
