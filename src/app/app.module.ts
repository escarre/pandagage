// NG2
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Vendor
import { NovoElementsModule, NovoElementProviders } from 'novo-elements';
// APP
import { AppComponent } from './app.component';
import { AppBridgeService } from './service/app-bridge.service';
import { EquipmentFormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', redirectTo: 'sample', pathMatch: 'full' },
  { path: 'sample', loadChildren: './sample/sample.module#SampleModule' },
  { path: 'form', component: EquipmentFormComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    // Main Entry Component
    AppComponent,
    EquipmentFormComponent,
    // Modals/Popovers
  ],
  imports: [
    // NG2
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    // Vendor
    NovoElementsModule,
    NovoElementProviders.forRoot(),
    // APP
  ],
  providers: [
    AppBridgeService,
    // Vendor Overrides
    // APP
  ],
  bootstrap: [
    // Main Entry Component
    AppComponent,
    // Modals/Popovers
  ],
})
export class AppModule {}
