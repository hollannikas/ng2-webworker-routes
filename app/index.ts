import { 
  bootstrapWorkerUi, 
  WORKER_UI_LOCATION_PROVIDERS
} from '@angular/platform-webworker';

export function main() {
  console.log('bootstrapping worker UI');
  bootstrapWorkerUi('app/loader.js', WORKER_UI_LOCATION_PROVIDERS);
}

