import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { AboutComponent } from './pages/about/about.component';
import { ShowComponent } from './pages/show/show.component';
import { HoverDirective } from './directives/hover.directive';
import { ExpandableDirective } from './directives/expandable.directive';
import { DotPipe } from './pipes/dot.pipe';
import { RatePipe } from './pipes/rate.pipe';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListComponent,
    AboutComponent,
    ShowComponent,
    HoverDirective,
    ExpandableDirective,
    DotPipe,
    RatePipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
