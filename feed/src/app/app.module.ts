import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app.router.module';
import { SignComponent } from './sign/sign.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { FeedComponent } from './feed/feed.component';
import { FeedService } from './feed/feed.service';
import { NewFeedComponent } from './new-feed/new-feed.component';
import { NewCommentComponent } from './new-comment/new-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    MainComponent,
    LogoutComponent,
    FeedComponent,
    NewFeedComponent,
    NewCommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
