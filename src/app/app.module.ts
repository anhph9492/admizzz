import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'dashboards',
        loadChildren: () => import('./pages/dashboards/dashboards.module').then(m => m.DashboardsModule)
      }
    ]
  }
];

const firebaseConfig = {
  apiKey: 'AIzaSyBbot7j3dPF5hbfc2o5_qmjXS476oLlph8',
  authDomain: 'banded-hexagon-275008.firebaseapp.com',
  databaseURL: 'https://banded-hexagon-275008.firebaseio.com',
  projectId: 'banded-hexagon-275008',
  storageBucket: 'banded-hexagon-275008.appspot.com',
  messagingSenderId: '1044881337458',
  appId: '1:1044881337458:web:3cc3f6d2101bce1a6fa6eb',
  measurementId: 'G-P6HRZWHB9V'
};

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    ComponentsModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
