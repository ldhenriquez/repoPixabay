import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';

import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ModalImgComponent } from './modalImg/modal-img/modal-img.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { dataReducer } from './store/store.reductor';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    StoreModule.forRoot({ state: dataReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
