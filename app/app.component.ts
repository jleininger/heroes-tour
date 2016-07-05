import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService],
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
            <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';
}