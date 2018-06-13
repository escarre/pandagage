// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Vendor
import { NovoElementsModule, NovoElementProviders, AppBridge } from 'novo-elements';
import { Observable } from 'rxjs/Observable';
// APP
import { SampleComponent } from './sample.component';
import { environment } from '../../environments/environment';

export const routes: Routes = [{ path: '', component: SampleComponent, pathMatch: 'full' }];

@NgModule({
  imports: [
    // NG2
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Vendor
    NovoElementsModule,
    NovoElementProviders.forRoot(),
  ],
  declarations: [
    // APP
    SampleComponent,
  ],
  providers: [
    // Vendor Overrides
    // APP
  ],
})
export class SampleModule {}
