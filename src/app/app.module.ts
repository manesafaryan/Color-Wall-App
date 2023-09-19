import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WallComponent } from './components/wall/wall.component';
import { BrickComponent } from './components/brick/brick.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { WallBuilderComponent } from './components/wallbuilder/wallbuilder.component';

@NgModule({
  declarations: [AppComponent, WallComponent, BrickComponent, HomeComponent, WallBuilderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
