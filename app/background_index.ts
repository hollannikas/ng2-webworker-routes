import {NgModule} from '@angular/core';
import {WorkerAppModule} from '@angular/platform-webworker';
import {platformWorkerAppDynamic} from '@angular/platform-webworker-dynamic';

import {App} from 'index_common';

@NgModule({imports: [WorkerAppModule], bootstrap: [App], declarations: [App]})
class BackgroundModule {
}

export function main() {
  console.log('bootstrapping worker app');
  platformWorkerAppDynamic().bootstrapModule(BackgroundModule);
}