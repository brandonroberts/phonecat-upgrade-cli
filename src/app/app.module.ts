import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import moduleName from './app.module.ajs';
import { Phone } from './core/phone/phone.service';
import { CheckmarkPipe } from './core/checkmark/checkmark.pipe';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { routeParamsProvider, locationProvider } from './ajs-upgraded-providers';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { LocationUpgradeModule } from '@angular/common/upgrade';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule,
    FormsModule,
    LocationUpgradeModule.config()
  ],
  declarations: [
    PhoneListComponent,
    PhoneDetailComponent,
    CheckmarkPipe
  ],
  entryComponents: [
    PhoneListComponent,
    PhoneDetailComponent
  ],
  providers: [
    Phone,
    routeParamsProvider,
    locationProvider
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, [moduleName]);
  }
}
