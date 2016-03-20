var App = angular.module('Barbarians', []);

require( './service')(App);
require( './barbarian/service')(App);
require( './add/service')(App);

require( './components/modal/directive')(App);

require( './add/controller')(App);
require( './barbarian/controller')(App);

require( './edit/controller')(App);
require( './edit/directive')(App);

require( './pwd/controller')(App);
require( './pwd/directive')(App);

require( './search/controller')(App);