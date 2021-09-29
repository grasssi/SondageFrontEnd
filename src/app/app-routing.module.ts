import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './reset/resetpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AuthGuardGuard } from './auth-guard.guard';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   canActivate:[AuthGuardGuard],
  //   pathMatch: 'full',
  // },
  {
    path: 'changepassword/:resetlink',
    component: ChangepasswordComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'reset',
    component: ResetpasswordComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        canActivate:[AuthGuardGuard],
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'editors',
        loadChildren: () => import('./views/editors/editors.module').then(m => m.EditorsModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./views/forms/forms.module').then(m => m.FormsModule)
      },
      {
        path: 'google-maps',
        loadChildren: () => import('./views/google-maps/google-maps.module').then(m => m.GoogleMapsModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'plugins',
        loadChildren: () => import('./views/plugins/plugins.module').then(m => m.PluginsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./views/tables/tables.module').then(m => m.TablesModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'apps',
        loadChildren: () => import('./views/apps/apps.module').then(m => m.AppsModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
