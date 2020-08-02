import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// Routing Modules
import { ErrorRoutingModule } from './error-routing.module';
import { AppRoutingModule } from './app-routing.module';
// Modules
import { MainModule } from './pages/main/main.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MainModule, ErrorRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
