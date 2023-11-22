import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  // {
  //   path: '', component: DashboardComponent,
  //   children: [
  //     { path: '', redirectTo: 'home', pathMatch: 'full' },

  //     { path: 'profile', loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule) },
  //     { path: 'apppointment-history', loadChildren: () => import('./apppointment-history/apppointment-history.module').then((m) => m.ApppointmentHistoryModule) },
  //     { path: 'steps-apppointment', loadChildren: () => import('./steps-appointment/steps-appointment.module').then((m) => m.StepsAppointmentModule) },
  //     { path: 'my-vehicle', loadChildren: () => import('./my-vehicle/my-vehicle.module').then((m) => m.MyVehicleModule) },
  //     { path: 'add-new-vehicle', loadChildren: () => import('./add-new-vehicle/add-new-vehicle.module').then((m) => m.AddNewVehicleModule) },
  //     { path: 'wallet', loadChildren: () => import('./wallet/wallet.module').then((m) => m.WalletModule) },
  //     { path: 'help', loadChildren: () => import('./help/help.module').then((m) => m.HelpModule) },
  //     { path: 'home', loadChildren: () => import('./statistics/statistics.module').then((m) => m.StatisticsModule) },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
