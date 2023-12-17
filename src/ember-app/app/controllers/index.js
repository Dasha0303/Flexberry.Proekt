import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.увольнение.caption'),
          title: i18n.t('forms.application.sitemap.увольнение.title'),
          children: [{
            link: 'i-i-s-proekt-увольнение-l',
            caption: i18n.t('forms.application.sitemap.увольнение.i-i-s-proekt-увольнение-l.caption'),
            title: i18n.t('forms.application.sitemap.увольнение.i-i-s-proekt-увольнение-l.title'),
            icon: 'building',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.оценка.caption'),
          title: i18n.t('forms.application.sitemap.оценка.title'),
          children: [{
            link: 'i-i-s-proekt-оценка-l',
            caption: i18n.t('forms.application.sitemap.оценка.i-i-s-proekt-оценка-l.caption'),
            title: i18n.t('forms.application.sitemap.оценка.i-i-s-proekt-оценка-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-proekt-отчет-об-оценке-l',
            caption: i18n.t('forms.application.sitemap.оценка.i-i-s-proekt-отчет-об-оценке-l.caption'),
            title: i18n.t('forms.application.sitemap.оценка.i-i-s-proekt-отчет-об-оценке-l.title'),
            icon: 'address card',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-proekt-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-proekt-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-proekt-сотрудники-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})