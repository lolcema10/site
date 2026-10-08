import { useEffect, useState } from "react";

const base = import.meta.env.BASE_URL;

// Первая запись выбирается при открытии страницы. Новую версию добавляйте сверху.
const versions = [
  {
    id: "1.1",
    label: "1.1",
    date: "8 октября 2026",
    macos: { file: "works-macos.zip", size: "45 МБ", detail: "works.app" },
    windows: { file: "works-windows.zip", size: "58 МБ", detail: "works.exe" },
  },
  {
    id: "1.0",
    label: "1.0",
    date: "7 октября 2026",
    macos: { file: "works-macos.zip", size: "45 МБ", detail: "works.app" },
    windows: { file: "works-windows.zip", size: "58 МБ", detail: "works.exe" },
  },
];

const features = [
  ["Файлы", "Папки, поиск и открытие фото, видео и звука."],
  ["Редактор фото", "Правка фотографий."],
  ["Редактор видео", "Ролики mp4, mov и m4v."],
  ["Редактор звука", "Правка звуковых файлов."],
  ["Пианино", "Клавиши: пианино или гитара."],
  ["Конвертер", "Фото, звук и видео в другой формат."],
  ["Заметки", "Короткие записи на этом компьютере."],
  ["Диктофон", "Голосовые заметки."],
  ["Калькулятор", "Обычные вычисления."],
  ["Часы и расписание", "Дата, время и напоминания."],
  ["Настройки", "Русский или английский, светлая или тёмная тема."],
];

const games = [
  "2048",
  "Крестики-нолики",
  "Змейка",
  "Дурак",
  "Косынка",
  "Сапёр",
  "Тетрис",
  "Реверси",
  "Арканоид",
];

const releaseApi = "https://api.github.com/repos/lolcema10/site/releases";

function archiveHref(version, file) {
  return `https://github.com/lolcema10/site/releases/download/v${version}/${file}`;
}

function downloadPhrase(count) {
  const n = Math.abs(count) % 100;
  const last = n % 10;
  if (n > 10 && n < 20) return `${count} скачиваний`;
  if (last === 1) return `${count} скачивание`;
  if (last >= 2 && last <= 4) return `${count} скачивания`;
  return `${count} скачиваний`;
}

export default function App() {
  const [versionId, setVersionId] = useState(versions[0].id);
  const [counts, setCounts] = useState(null);
  const [countsError, setCountsError] = useState(false);
  const version = versions.find((item) => item.id === versionId) ?? versions[0];
  const downloads = [
    { os: "macOS", ...version.macos },
    { os: "Windows", ...version.windows },
  ];

  useEffect(() => {
    let cancelled = false;
    fetch(releaseApi)
      .then((response) => {
        if (!response.ok) throw new Error(String(response.status));
        return response.json();
      })
      .then((releases) => {
        if (cancelled) return;
        const next = {};
        for (const release of releases) {
          const id = String(release.tag_name || "").replace(/^v/, "");
          next[id] = {};
          for (const asset of release.assets || []) {
            next[id][asset.name] = asset.download_count;
          }
        }
        setCounts(next);
      })
      .catch(() => {
        if (!cancelled) setCountsError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  function fileCount(file) {
    return counts?.[version.id]?.[file];
  }

  const knownCounts = downloads.map((item) => fileCount(item.file));
  const total = knownCounts.every((count) => typeof count === "number")
    ? knownCounts.reduce((sum, count) => sum + count, 0)
    : null;
  return (
    <>
      <header className="top">
        <a className="brand" href="#start">
          <img src={`${base}icon.png`} alt="" width="44" height="44" />
          <span>works</span>
        </a>
        <a className="top-link" href="#download">
          Скачать
        </a>
      </header>

      <main id="start">
        <section className="hero">
          <img
            className="hero-icon"
            src={`${base}icon.png`}
            alt=""
            width="160"
            height="160"
          />
          <div>
            <p className="eyebrow">Версия {version.label}</p>
            <h1>Моё приложение</h1>
            <p className="lead">
              Настольная программа для файлов и обычных дел: редакторы, заметки,
              диктофон, калькулятор и несколько игр. Среда выполнения уже внутри
              архива, отдельно ставить Java не нужно.
            </p>
          </div>
        </section>

        <section id="download" className="download-panel" aria-labelledby="download-title">
          <h2 id="download-title">Скачать</h2>
          <fieldset className="versions">
            <legend>Версия</legend>
            {versions.map((item, index) => (
              <label key={item.id} className="version">
                <input
                  type="radio"
                  name="version"
                  value={item.id}
                  checked={item.id === version.id}
                  onChange={() => setVersionId(item.id)}
                />
                <span>{item.label}</span>
                {index === 0 ? <small>новее</small> : null}
              </label>
            ))}
          </fieldset>
          <p className="version-date">Сборка от {version.date}</p>
          <p className="download-count">
            {countsError
              ? "Счётчик сейчас недоступен"
              : total === null
                ? "Считаем скачивания…"
                : `Скачиваний этой версии: ${total}`}
          </p>
          <div className="downloads">
            {downloads.map((item) => {
              const count = fileCount(item.file);
              return (
                <a
                  key={item.os}
                  className="download"
                  href={archiveHref(version.id, item.file)}
                >
                  <span className="download-os">Скачать для {item.os}</span>
                  <span className="download-meta">
                    {item.file} · {item.size} · {item.detail}
                    {typeof count === "number" ? ` · ${downloadPhrase(count)}` : ""}
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="block" aria-labelledby="inside-title">
          <h2 id="inside-title">Что внутри</h2>
          <dl className="features">
            {features.map(([name, text]) => (
              <div key={name}>
                <dt>{name}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="block" aria-labelledby="games-title">
          <h2 id="games-title">Мини-игры</h2>
          <ul className="games">
            {games.map((game) => (
              <li key={game}>{game}</li>
            ))}
          </ul>
        </section>

        <section className="block" aria-labelledby="install-title">
          <h2 id="install-title">Как запустить</h2>
          <div className="install">
            <article>
              <h3>macOS</h3>
              <ol>
                <li>Скачайте архив и распакуйте его.</li>
                <li>
                  Перенесите <span className="path">works.app</span> в папку
                  «Программы».
                </li>
                <li>
                  При первом запуске щёлкните по приложению правой кнопкой и
                  выберите «Открыть». macOS просит подтверждение, потому что
                  сборка не подписана Apple.
                </li>
              </ol>
            </article>
            <article>
              <h3>Windows</h3>
              <ol>
                <li>Скачайте архив и распакуйте его в отдельную папку.</li>
                <li>
                  Запустите <span className="path">works.exe</span>. Каталог{" "}
                  <span className="path">runtime</span> должен остаться рядом с
                  ним.
                </li>
              </ol>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>works {version.label}</p>
        <a href="https://github.com/lolcema10/site">github.com/lolcema10/site</a>
      </footer>
    </>
  );
}
