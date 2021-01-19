import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { ContactComponent } from './contact/contact.component'
import { ServicesComponent } from './services/services.component'
import { ThalgoComponent } from './thalgo/thalgo.component';
import { EyeStylingComponent } from './eye-styling/eye-styling.component';
import { WoskComponent } from './wosk/wosk.component';
import { ZabiegiWimComponent } from './zabiegi-wim/zabiegi-wim.component';
import { ZabiegiTwarzComponent } from './zabiegi-twarz/zabiegi-twarz.component';
import { PeelingiComponent } from './peelingi/peelingi.component';
import { ManicurePedicureComponent } from './manicure-pedicure/manicure-pedicure.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'uslugi', component: ServicesComponent },
  { path: 'uslugi/thalgo', component: ThalgoComponent },
  { path: 'uslugi/stylizacja-brwi-i-rzes', component: EyeStylingComponent},
  { path: 'uslugi/wosk', component: WoskComponent},
  { path: 'uslugi/zabiegi-wyszczuplajace-i-modelujace', component: ZabiegiWimComponent},
  { path: 'uslugi/zabiegi-twarz', component: ZabiegiTwarzComponent},
  { path: 'uslugi/peelingi', component: PeelingiComponent},
  { path: 'uslugi/manicure-i-pedicure', component: ManicurePedicureComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
