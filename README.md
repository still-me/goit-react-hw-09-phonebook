✅ Запуск приложения

         npx create-react-app .

✅ Настройка pre-commit хуков

1.  Установка зависимостей. Установить в проект следующие пакеты.

         npm install --save-dev prettier eslint

2.  Инициализация lint-staged и husky
    Выполнить в терминале следующую команду. Она установит и настроит husky и lint-staged в зависимости от инструментов качества кода из зависимостей проекта в package.json.

          npx mrm lint-staged

❗️ если ошибка, используй

          npx mrm@2 lint-staged

3.  Настройки VSCode
    Для комфортной работы, после установки плагинов, нужно добавить несколько настроек редактора для автосохранения и форматирования файлов.

         {
         "files.autoSave": "onFocusChange",
         "editor.formatOnSave": true,
         "editor.codeActionsOnSave": {
         "source.fixAll.eslint": true
         }
         }

✅ Установить normalize

1.  установить пакет

        npm install modern-normalize

2.  подключить в index.js

        import 'modern-normalize/modern-normalize.css';

✅ Оптимизированный путь к папкам SCSS

1. Создать файл .env
2. путь SASS_PATH=node_modules:src

❗️ При ошибке "cannot find module 'sass'", используй

      - npm add node-sass

✅  Оптимизированый путь к папке src

1.  Создать файл jsconfig.json
2.                                 {
                "compilerOptions": {
                    "baseUrl": "src"
                },
                "include": [
                    "src"
                ]
              }

✅ Деплой на Netlify

1.  Создать файл netlify.toml
2.  Содержимое файла netlify.toml
    [build]
    publish = "build"

[[redirects]]
from = "/\*"
to = "./index.html"
status = 200

3.  ❗️Один раз глобально❗️ выполнить команду npm install netlify-cli -g (При ошибке помогло sudo npm install netlify-cli -g --unsafe-perm). Потом что бы залогиниться netlify login

4.  Если в package.json есть homepage, нужно удалить

5.  Добавить в package.json скрипты:

         ➕ "predeploy": "npm run build",
         ➕ "deploy": "netlify deploy -p",

6.  Выполнить скрипт npm run deploy:

- выбрать стрелкою Create & configure a new site , ENTER
- Team, ENTER
- Site name, должно быть уникальным(можно использовать свою приставку)
  -Website URL, можно перейти вручную или выполнить комманду netlify open --site

7. При обновлении проэкта выполнять npm run deploy

8. Удаление: Удалить на странице проэкта + удалить папку .netlify в проэкте.

✅ Деплой на GitHub Pages

1.  Выполнить команду :

          npm run build

2.  В package.json добавляем :

          "private": true,
         ➕ "homepage": "https://still-me.github.io/имя_репозитория",

3.  Еще раз выполнить команду:

          npm run build

4.  Установить пакет gh-pages выполнив команду:

          npm install --save gh-pages

5.  добавить скрипты

         "scripts": {
         ➕ "predeploy": "npm run build",
         ➕ "deploy": "gh-pages -d build",
         "start": "react-scripts start",
         "build": "react-scripts build",

6.  Для отправки на Github выполнить команду

          npm run deploy

✅ Redux

1. Установить пакет

   npm install redux

2.Установить пакет

    npm install react-redux

3.Redux DevTools (❗️ если без Redux Toolkit)

    npm install --save-dev redux-devtools-extension

3.1 .Импортировать в store и добавить в функцию (1.3 пункт гайда)

    import { composeWithDevTools } from 'redux-devtools-extension';

    const store = createStore(reducer, composeWithDevTools());

4.Установить Redux Toolkit:

    npm install @reduxjs/toolkit

5.Для сохранения в localStorage:

    npm install redux-persist

6.Logger

    npm i --save redux-logger
