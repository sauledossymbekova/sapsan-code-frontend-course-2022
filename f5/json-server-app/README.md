# Добавить свой бэк и базу данных через json-server
npm i json-server
"server": "json-server --watch db.json --port 5000", добавить в scripts в package.json
создать и заполнить файл db.json с вашкй инфой
npm run server в одном терминале, запускает ваш сервер бэк
npm start в другом терминале, запускает фронт часть

front: http://localhost:3000/
backend: http://localhost:5000/

 Resources
  http://localhost:5000/posts
  http://localhost:5000/users
  http://localhost:5000/items
  http://localhost:5000/products