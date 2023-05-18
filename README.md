# apteka-test

### Запуск на локальной машине

1. **Утановите node.js & npm.**
2. **Склонируйте репозиторий.**

```bash
git clone https://github.com/proll4588/apteka-test.git
```

```bash
cd apteka-test
```

3. **Установите зависимости.**

```bash
npm i
```

4. **Установите и запустите сервер.**

```bash
npm install -g json-server
```

```bash
json-server --watch db.json --port 3004
```

5. **Запустите приложение.**

```bash
npm run start
```

Перейдите по ссылке http://localhost:3000
Если необходимо использовать другой порт сервера то в .env в REACT_APP_SERVER_PORT вписываем нужный и перезагружаем приложение
