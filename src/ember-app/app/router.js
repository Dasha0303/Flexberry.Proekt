import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proekt-отчет-об-оценке-l');
  this.route('i-i-s-proekt-отчет-об-оценке-e',
  { path: 'i-i-s-proekt-отчет-об-оценке-e/:id' });
  this.route('i-i-s-proekt-отчет-об-оценке-e.new',
  { path: 'i-i-s-proekt-отчет-об-оценке-e/new' });
  this.route('i-i-s-proekt-оценка-l');
  this.route('i-i-s-proekt-оценка-e',
  { path: 'i-i-s-proekt-оценка-e/:id' });
  this.route('i-i-s-proekt-оценка-e.new',
  { path: 'i-i-s-proekt-оценка-e/new' });
  this.route('i-i-s-proekt-сотрудники-l');
  this.route('i-i-s-proekt-сотрудники-e',
  { path: 'i-i-s-proekt-сотрудники-e/:id' });
  this.route('i-i-s-proekt-сотрудники-e.new',
  { path: 'i-i-s-proekt-сотрудники-e/new' });
  this.route('i-i-s-proekt-увольнение-l');
  this.route('i-i-s-proekt-увольнение-e',
  { path: 'i-i-s-proekt-увольнение-e/:id' });
  this.route('i-i-s-proekt-увольнение-e.new',
  { path: 'i-i-s-proekt-увольнение-e/new' });
});

export default Router;
