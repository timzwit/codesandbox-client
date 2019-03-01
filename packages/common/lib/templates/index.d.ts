import angular from './angular';
import babel from './babel';
import parcel from './parcel';
import preact from './preact';
import reason from './reason';
import react from './react';
import reactTs from './react-ts';
import svelte from './svelte';
import vue from './vue';
import ember from './ember';
import cxjs from './cxjs';
import dojo from './dojo';
import custom from './custom';
import gatsby from './gatsby';
import nuxt from './nuxt';
import next from './next';
import node from './node';
import apollo from './apollo-server';
import sapper from './sapper';
import nest from './nest';
import staticTemplate from './static';
import styleguidist from './styleguidist';
export { angular, custom, apollo, gatsby, next, nuxt, node, babel, cxjs, dojo, parcel, preact, react, reactTs, reason, svelte, vue, sapper, nest, ember, staticTemplate, styleguidist, };
export declare type TemplateType = 'create-react-app' | 'vue-cli' | 'preact-cli' | 'svelte' | 'create-react-app-typescript' | 'angular-cli' | 'parcel' | 'cxjs' | '@dojo/cli-create-app' | 'gatsby' | 'nuxt' | 'next' | 'reason' | 'apollo' | 'sapper' | 'nest' | 'static' | 'styleguidist';
export default function getDefinition(theme: TemplateType): import("./template").default | import("./parcel").ParcelTemplate;
