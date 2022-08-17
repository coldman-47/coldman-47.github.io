import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { environment } from 'src/environments/environment';
import { AdministrationModule } from './administration/administration.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { LoginComponent } from './shared/login/login.component';
import { CommonModule } from '@angular/common';

const config: SocketIoConfig = {
  url: environment.backendUrl.split('api')[0],
  options: {},
};

@NgModule({
  declarations: [AppComponent, LayoutComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AdministrationModule,
    AppRoutingModule,
    AvatarModule,
    ButtonModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [HttpClientModule, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
