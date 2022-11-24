import 'zone.js/dist/zone';
import { bootstrapApplication } from '@angular/platform-browser';
// import { provideRouter } from '@angular/router';

// import router from '~/plugins/router';

import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [
    // provideRouter(router),
  ],
});
