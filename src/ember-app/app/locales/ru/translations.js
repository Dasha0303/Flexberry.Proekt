import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proekt',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proekt',
          title: 'Proekt'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
