import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { PreviewComponent } from './preview/preview.component';
import { ShellComponent } from './shell/shell.component';


const routes: Routes = [

    {
        path: 'preview',
        component: PreviewComponent
    },
    {
        path: 'home',
        component: ShellComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }