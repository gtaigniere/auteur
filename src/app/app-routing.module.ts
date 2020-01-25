import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListeAuteursComponent  } from './pages/liste-auteurs/liste-auteurs.component';
import { AuteurComponent  } from './pages/auteur/auteur.component';
import { AccueilComponent  } from './pages/accueil/accueil.component';
import { SidebarComponent  } from './pages/sidebar/sidebar.component';

const routes: Routes = [
	{ path: 'liste-auteurs', component: ListeAuteursComponent },
	{ path: 'auteur/:id', component: AuteurComponent },
	{ path: '', component: SidebarComponent, outlet: 'sidebar'},
	{ path: '', component: AccueilComponent },
	{ path: '**', component: AccueilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
