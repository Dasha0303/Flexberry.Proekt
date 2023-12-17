import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProektОтчетОбОценкеLForm from './forms/i-i-s-proekt-отчет-об-оценке-l';
import IISProektОценкаLForm from './forms/i-i-s-proekt-оценка-l';
import IISProektСотрудникиLForm from './forms/i-i-s-proekt-сотрудники-l';
import IISProektУвольнениеLForm from './forms/i-i-s-proekt-увольнение-l';
import IISProektОтчетОбОценкеEForm from './forms/i-i-s-proekt-отчет-об-оценке-e';
import IISProektОценкаEForm from './forms/i-i-s-proekt-оценка-e';
import IISProektСотрудникиEForm from './forms/i-i-s-proekt-сотрудники-e';
import IISProektУвольнениеEForm from './forms/i-i-s-proekt-увольнение-e';
import IISProektОтчетОбОценкеModel from './models/i-i-s-proekt-отчет-об-оценке';
import IISProektОценкаModel from './models/i-i-s-proekt-оценка';
import IISProektПодробноModel from './models/i-i-s-proekt-подробно';
import IISProektСотрудникиModel from './models/i-i-s-proekt-сотрудники';
import IISProektУвольнениеModel from './models/i-i-s-proekt-увольнение';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proekt-отчет-об-оценке': IISProektОтчетОбОценкеModel,
    'i-i-s-proekt-оценка': IISProektОценкаModel,
    'i-i-s-proekt-подробно': IISProektПодробноModel,
    'i-i-s-proekt-сотрудники': IISProektСотрудникиModel,
    'i-i-s-proekt-увольнение': IISProektУвольнениеModel
  },

  'application-name': 'Proekt',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proekt',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proekt',
          title: 'Proekt'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        увольнение: {
          caption: 'Увольнение',
          title: 'Увольнение',
          'i-i-s-proekt-увольнение-l': {
            caption: 'Увольнение',
            title: ''
          }
        },
        оценка: {
          caption: 'Оценка',
          title: 'Оценка',
          'i-i-s-proekt-оценка-l': {
            caption: 'Оценка',
            title: ''
          },
          'i-i-s-proekt-отчет-об-оценке-l': {
            caption: 'Отчет об оценке',
            title: ''
          }
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-proekt-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proekt-отчет-об-оценке-l': IISProektОтчетОбОценкеLForm,
    'i-i-s-proekt-оценка-l': IISProektОценкаLForm,
    'i-i-s-proekt-сотрудники-l': IISProektСотрудникиLForm,
    'i-i-s-proekt-увольнение-l': IISProektУвольнениеLForm,
    'i-i-s-proekt-отчет-об-оценке-e': IISProektОтчетОбОценкеEForm,
    'i-i-s-proekt-оценка-e': IISProektОценкаEForm,
    'i-i-s-proekt-сотрудники-e': IISProektСотрудникиEForm,
    'i-i-s-proekt-увольнение-e': IISProektУвольнениеEForm
  },

});

export default translations;
