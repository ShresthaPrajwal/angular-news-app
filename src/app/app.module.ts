import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { MatButtonModule } from '@angular/material/button'
import { TopStoriesService } from './shared/services/news_services/top-stories.service'
import { HttpClientModule } from '@angular/common/http'
import { NavbarComponent } from './shared/components/Navbar/navbar/navbar.component'
import { MatTabsModule } from '@angular/material/tabs'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatDividerModule } from '@angular/material/divider'
import { TopStoriesModule } from './modules/top_stories/top-stories.module'
import { HeadCardComponent } from './shared/components/head-card/head-card.component'
import { PrimaryCardComponent } from './shared/components/primary-card/primary-card.component'
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component'
import { BooksModule } from './modules/books/books.module'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadCardComponent,
    PrimaryCardComponent,
    MainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TopStoriesModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    BooksModule,
  ],
  providers: [provideAnimationsAsync(), TopStoriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
