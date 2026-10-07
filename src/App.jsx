const base = import.meta.env.BASE_URL;

const downloads = [
  {
    os: "macOS",
    file: "works-macos.zip",
    size: "45 МБ",
    detail: "works.app",
  },
  {
    os: "Windows",
    file: "works-windows.zip",
    size: "58 МБ",
    detail: "works.exe",
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

function archiveHref(file) {
  return `${base}downloads/${file}`;
}

export default function App() {
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
            <p className="eyebrow">Версия 1.0</p>
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
          <div className="downloads">
            {downloads.map((item) => (
              <a
                key={item.os}
                className="download"
                href={archiveHref(item.file)}
              >
                <span className="download-os">Скачать для {item.os}</span>
                <span className="download-meta">
                  {item.file} · {item.size} · {item.detail}
                </span>
              </a>
            ))}
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
        <p>works 1.0</p>
        <a href="https://github.com/lolcema10/site">github.com/lolcema10/site</a>
      </footer>
    </>
  );
}
