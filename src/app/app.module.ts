import { environment } from 'src/environments/environment';
import { SpinnerComponent } from './core/spinner/spinner.component';
import { SpinnerService } from './core/spinner/spinner.service';
import { SpinnerModule } from './core/spinner/spinner.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, RequestOptions, HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExternalLayoutModule } from './layouts/external-layout/external-layout.module';
import { InternalLayoutModule } from './layouts/internal-layout/internal-layout.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ToastyModule } from 'ng2-toasty';
import { CustomHttpInterceptor } from './core/spinner/http-interceptor';
import { MatProgressSpinnerModule } from '@angular/material';
import { JwtModule } from '@auth0/angular-jwt';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxLoadingModule } from 'ngx-loading';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    InternalLayoutModule,
    ExternalLayoutModule,
    SpinnerModule,
    MatProgressSpinnerModule,
    ToastyModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: environment.tokenWhitelistedDomains,
        blacklistedRoutes: ['\/oauth\/token']
      }
    }),
    CKEditorModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [
    SpinnerService,
    // { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
