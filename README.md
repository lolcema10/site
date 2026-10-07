# works

Страница скачивания приложения works. Сборка на React и Vite, публикация на GitHub Pages: https://lolcema10.github.io/site/

## Локально

```bash
npm install
npm run dev
```

Сайт открывается по адресу http://localhost:5173/site/

## Сборки

Архивы лежат в `public/downloads`:

- `works-macos.zip` — `works.app` для macOS
- `works-windows.zip` — `works.exe` и каталог `runtime` для Windows

Чтобы выложить новую сборку, замените архив и отправьте `main`. Страница обновится через Actions. Тот же push обновляет релиз [v1.0](https://github.com/lolcema10/site/releases/tag/v1.0), если изменились файлы в `public/downloads`.

Кнопки на странице скачивают архивы с самого сайта.
