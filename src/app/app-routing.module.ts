import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterPageComponent } from './Components/filter-page/filter-page.component';
import { JsonHtMLComponent } from './json-ht-ml/json-ht-ml.component';

const routes: Routes = [
  { path: ''          , component: FilterPageComponent },
  { path: 'filter'    , component: FilterPageComponent },
  { path: 'jsonHtml'  , component: JsonHtMLComponent },
  { path: '**'        , component: FilterPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
