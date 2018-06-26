import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';
import { TurnoverComponent } from '../turnover/turnover.component';
import { ListComponent } from '../list/list.component';
import { PromoComponent } from '../promo/promo.component';
import { StatementComponent } from '../statement/statement.component';
import { AffiliatesComponent } from '../affiliates/affiliates.component';
import { MaterialsComponent } from '../affiliates/materials/materials.component';
import { HomeComponent } from '../affiliates/home/home.component';
import { PackagesComponent } from '../affiliates/packages/packages.component';
import { WithdrawnComponent } from '../affiliates/withdrawn/withdrawn.component';
import { VerifiedComponent } from '../affiliates/verified/verified.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'users',
    component: ProfileComponent
  },
  {
    path: 'affiliates',
    component: AffiliatesComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'materials',
        component: MaterialsComponent
      },
      {
        path: 'packages',
        component: PackagesComponent
      },
      {
        path: 'withdrawn',
        component: WithdrawnComponent
      },
      {
        path: 'verified',
        component: VerifiedComponent
      }
    ]
  },
  {
    path: 'turnover',
    component: TurnoverComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'statement',
    component: StatementComponent
  },
  {
    path: 'promo',
    component: PromoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class CoreRoutingModule { }
