import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdCardModule, MdInputModule, MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { ReposComponent } from './repos/repos.component';
import { UserComponent } from './user/user.component';
import { PageComponent } from './page/page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReposComponent,
    PageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MdToolbarModule,
    MdInputModule,
    MdCardModule,
    FormsModule,
    MdButtonModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PageComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
