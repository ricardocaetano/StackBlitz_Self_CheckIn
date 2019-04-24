import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LfRoutes, LF_ROUTER_BASE_PATH} from '@lightweightform/core';


/**
 * Application routes.
 */
const routes: LfRoutes = [
  /*TODO CP1: create the app routing system*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule],
  providers: [{provide: LF_ROUTER_BASE_PATH, useValue: '/'}],
})
export class AppRoutingModule {}
