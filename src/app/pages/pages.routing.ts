import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graph1Component } from "./graph1/graph1.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";
import { AccountSettingsComponent } from './account-settings/account-settings.component';


const routes: Routes = [
    { 
        path: 'dashboard',
        component: PagesComponent, 
        children: [
          { path: '', component: DashboardComponent },
          { path: 'progress', component: ProgressComponent },
          { path: 'chart', component: Graph1Component },
          { path: 'account-settings', component: AccountSettingsComponent },

        ]
      },
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}