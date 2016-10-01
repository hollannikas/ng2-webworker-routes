import {Component,NgModule} from '@angular/core';
import {WORKER_APP_LOCATION_PROVIDERS, WorkerAppModule} from '@angular/platform-webworker';
import {RouterModule} from '@angular/router';
import {Start} from './components/start.component';
import {Detail} from './components/detail.component';

@Component({selector: 'app', templateUrl: 'app.component.html'})
export class App {  
}

export const ROUTES = [
  {path: '', component: Start}, 
  {path: 'detail', component: Detail}
];

@NgModule({
  imports: [WorkerAppModule, RouterModule.forRoot(ROUTES, {useHash: true})],
  providers: [WORKER_APP_LOCATION_PROVIDERS],
  bootstrap: [App],
  declarations: [App, Start, Contact, About]
})
export class AppModule {
}


