import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
	selector: 'hero-detail', 
	template: 
		`<div *ngIf="hero">
	  	<h2>{{selectedHero.name}} details</h2>
	  	<div><label>ID: </label>{{hero.id}}</div>
	  	<div>
	  		<label>Name: </label>
	  		<input [(ngModel)]="hero.name" placehoder="name"/>
	  	</div>
	  </div>
	  `
})

export class HeroDetailComponent {
	@Input() hero: Hero;
}