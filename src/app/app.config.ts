import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { loadingInterceptor } from './core/interceptors/loading/loading.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes , withInMemoryScrolling({scrollPositionRestoration:'top'})), 
     provideHttpClient(withFetch() , withInterceptors([loadingInterceptor])),
    provideAnimations(),
    importProvidersFrom(BrowserModule , NgxSpinnerModule),
     provideToastr(),
     provideClientHydration(withEventReplay())
    ]
};
