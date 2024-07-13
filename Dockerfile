# Используем официальный образ Node.js версии 20.15.1
FROM node:20.15.1-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы
COPY . .

# Собираем проект
RUN npm run build

# Указываем команду запуска
CMD ["npm", "start"]

# Указываем порт, который будет прослушиваться приложением
EXPOSE 3000
