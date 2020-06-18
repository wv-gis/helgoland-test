import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionalDataGraphComponent } from './additional-data-graph/additional-data-graph.component';
import { HelgolandD3Module } from '@helgoland/d3';
import { HelgolandCoreModule, DatasetApiV1ConnectorProvider, DatasetApiInterface, SplittedDataDatasetApiInterface } from '@helgoland/core';
import { HelgolandDatasetlistModule } from '@helgoland/depiction';

import { HelgolandEventingModule } from '@helgoland/eventing';
import { HelgolandMapSelectorModule, HelgolandMapModule } from '@helgoland/map';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AdditionalDataGraphComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HelgolandCoreModule, HelgolandD3Module,
    HelgolandMapModule,
    HelgolandEventingModule, HelgolandMapSelectorModule, HelgolandDatasetlistModule,
  ],

  providers: [
    DatasetApiV1ConnectorProvider,
    {
      provide: DatasetApiInterface,
      useClass: SplittedDataDatasetApiInterface
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
