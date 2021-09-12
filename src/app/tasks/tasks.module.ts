import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TasksPage as TasksPage } from './tasks.page';

import { TasksPageRoutingModule } from './tasks-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TasksPageRoutingModule
  ],
  declarations: [TasksPage]
})

export class TasksPageModule {}
