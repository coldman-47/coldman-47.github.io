import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { environment } from 'src/environments/environment';
import { AdministrationModule } from './administration/administration.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { LayoutComponent } from './shared/layout/layout.component';
import { LoginComponent } from './shared/login/login.component';

registerLocaleData(localeFr);
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
    ToastModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [HttpClientModule, MessageService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
