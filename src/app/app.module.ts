import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { SettingsComponent } from './components/settings/settings.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FeedComponent } from './feed/feed.component';
import { CreatepostComponent } from './components/createpost/createpost.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    BookmarksComponent,
    MessagesComponent,
    FeedComponent,
    CreatepostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
