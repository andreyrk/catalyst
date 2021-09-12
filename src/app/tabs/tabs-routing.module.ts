import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tasks',
        loadChildren: () => import('../tasks/tasks.module').then(m => m.TasksPageModule)
      },
      {
        path: 'courses',
        loadChildren: () => import('../courses/courses.module').then(m => m.CoursesPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: '',
        redirectTo: '/courses',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class TabsPageRoutingModule {}
