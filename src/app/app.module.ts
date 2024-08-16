import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { MatButtonModule } from '@angular/material/button'
import { TopStoriesService } from './shared/services/news_services/top-stories.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './shared/components/Navbar/navbar/navbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { TopStoriesModule } from './modules/top_stories/top-stories.module';
import { MostPopularModule } from './modules/most-popular/most-popular.module';
import { IndividualCardComponent } from './shared/components/individual-card/individual-card.component';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './shared/components/footer/footer.component';

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
    MostPopularModule,
  ],
  providers: [provideAnimationsAsync(), TopStoriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
