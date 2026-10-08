# works

Страница скачивания приложения works. Сборка на React и Vite, публикация на GitHub Pages: https://lolcema10.github.io/site/

## Локально

```bash
npm install
npm run dev
```

Сайт открывается по адресу http://localhost:5173/site/

## Сборки

Архивы лежат по версиям в `public/downloads`:

- `1.1/works-macos.zip` и `1.1/works-windows.zip`
- `1.0/works-macos.zip` и `1.0/works-windows.zip`

На странице список версий задаётся в `src/App.jsx`. Первая запись в массиве `versions` открывается по умолчанию. Чтобы добавить сборку, положите архивы в новую папку и поставьте её запись первой в этом массиве.

Кнопки скачивают архив выбранной версии с самого сайта.
