# Базовый шаблон проекта на React

Пример шаблона для начала работ над frontend проектами

## Перед началом работы

Для работы шаблона необходимо установить `nodejs` (вместе с `npm`)

- [Установка Nodejs](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager "Installing Node.js via package manager")

## Установка шаблона

``` sh
$ git clone https://github.com/bcherepakha/react-starter-kit.git project-name
$ cd project-name
$ npm install
```

По окончанию выполнения будут установлены все необходимые пакеты.

## Build проекта

``` sh
$ npm run build
```

## Dev проекта

``` sh
$ npm run start
```

### Задачи

 - `$ npm run api` - запускает json-server, как api проекта,
                     использует файлик `./static/api/db.json` как БД
                     и адрес `http://localhost:9001`
 - `$ npm tun dev` - запускает webpack-dev-server с настройками из `webpack.config.js`

## Общая концепция

- `src/` - каталог для размещения рабочих файлов (less, js)
- `static/` - используемые статические файлы (html, `img/**/*.*`)
- `build/` - каталог для размещения готовой верстки

Вся работа осуществляется в каталоге `src/`.
