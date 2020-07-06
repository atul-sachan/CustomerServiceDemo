
Create the Empty Workspace - 
	1. ng new <Workspace-Name> --createApplication="false"
	2. cd <Workspace-Name>

Add a new Project to Workspace
	1. ng generate application <App-Name>

Run the App
	1. ng serve --project="<App-Name>"

Building the App for Production
	1. ng build --prod --project="<App-Name>"

Add a new Library to Workspace
	1. ng generate library <library-name> --prefix=<library-prefix-name>

Building the Library
	1. ng build <library-name>






















Angular Snippets (Version 9)
johnpapa.angular2

Snippet	Purpose
a-component	component
a-component-inline	component with inline template
a-component-root	root app component
a-ctor-skip-self	angular NgModule's skipself constructor
a-directive	directive
a-guard-can-activate	CanActivate guard
a-guard-can-activate-child	CanActivateChild guard
a-guard-can-deactivate	CanDeactivate guard
a-guard-can-load	CanLoad guard
a-httpclient-get	httpClient.get with Rx Observable
a-http-interceptor	Empty Angular HttpInterceptor for HttpClient
a-http-interceptor-headers	Angular HttpInterceptor that sets headers for HttpClient
a-http-interceptor-logging	Angular HttpInterceptor that logs traffic for HttpClient
a-module	module
a-module-root	root app module
a-output-event	@Output event and emitter
a-pipe	pipe
a-preload-opt-in-strategy	custom preload strategy that allows choosing which routes to preload
a-preload-network-strategy	custom preload strategy that preloads based on network connectivity
a-resolver	resolver
a-routes	Route definition file
a-rxjs-import	import RxJs features
a-rxjs-operators	import RxJs operators
a-route-path-404	404 route path
a-route-path-default	default route path
a-route-path-with-children	route path with children
a-route-path-eager	eager route path
a-route-path-lazy	lazy route path
a-router-events	listen to one or more router events
a-route-params-subscribe	subscribe to route parameters
a-service	service with injectable provided in root
a-service-httpclient	service with HttpClient
a-subscribe	Rx Observable subscription
a-trackby	to create a trackby function in TypeScript for the ngFor
NgRx Snippets
Snippet	Purpose
a-ngrx-store-module	create an NgRx store module
a-ngrx-create-action	create an NgRx action with createAction
a-ngrx-create-action-props	create an NgRx action with createAction with props
a-ngrx-create-reducer	create an NgRx reducer with createReducer
a-ngrx-create-effect	create an NgRx effect with createEffect
a-ngrx-create-effect-api	create an NgRx effect with createEffect for an API call
a-ngrx-create-selector	create an NgRx selector with createSelector
a-ngrx-create-selector-props	create an NgRx selector with createSelector with props
a-ngrx-data-entity-data-module-import	add EntityDataModule
a-ngrx-data-entity-metadata	create the entity metadata for NgRx
a-ngrx-data-entity-collection-data-service	create a data service using NgRx
Dockerfile Snippets
Snippet	Purpose
docker-angular-node-multi-stage	Multi-stage Dockerfile for Node with Angular
JavaScript Snippets
Snippet	Purpose
ex-simple-server	Node.js Express Server
HTML Snippets
Snippet	Purpose
a-class	[class] binding
a-select	<select> control
a-style	[style] binding
a-ngClass	ngClass
a-ngFor	*ngFor
a-ngForAsync	*ngFor with async
a-ngFor-trackBy	*ngFor with trackBy
a-form	create a form tag with ngSubmit and form attributes
a-formArrayName	formArrayName
a-formControlName	formControlName
a-formGroup	formGroup
a-formGroupName	formGroupName
a-form-submit	create a submit button for a form
a-ngIf	*ngIf
a-ngIfElse	*ngIf with else
a-ngModel	ngModel
a-routerLink	routerLink
a-routerLink-param	routerLink with a route parameter
a-ngStyle	ngStyle
a-ngSwitch	ngSwitch
a-prej	show the JSON form of a model
a-preja	show the JSON form of a model, using async
a-ng-container	<ng-container> element
a-ng-template	<ng-template> element
a-ng-content	<ng-content> element
VS Code Snippets
Snippet	Purpose
a-launch-chrome	launch/debug configuration for VS Code for Chrome
a-launch-edge	launch/debug configuration for VS Code for Edge
a-task-start	create a task configuration for starting the Angular app for VS Code









# ClientApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
