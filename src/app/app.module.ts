import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeAuteursComponent  } from './pages/liste-auteurs/liste-auteurs.component';
import { AuteurComponent } from './pages/auteur/auteur.component';
import { AccueilComponent  } from './pages/accueil/accueil.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
		ListeAuteursComponent,
		AuteurComponent,
		AccueilComponent,
		SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
