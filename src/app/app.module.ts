import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { PrimaryCardComponent } from './shared/components/primary-card/primary-card.component'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HeadCardComponent } from './shared/components/head-card/head-card.component'
@NgModule({
  declarations: [AppComponent, PrimaryCardComponent, MainLayoutComponent, HeadCardComponent],
  imports: [BrowserModule, AppRoutingModule, MatCardModule, MatDividerModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
