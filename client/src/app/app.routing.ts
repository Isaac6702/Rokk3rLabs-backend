import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { SimpleLayoutPage } from './pages/layouts/simple-layout';

//Pages
import { Search } from './pages/search/search';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SimpleLayoutPage,
    children: [
      {
        path: 'search',
        component: Search
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
