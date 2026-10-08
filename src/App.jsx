import { useEffect, useState } from "react";
import { downloadPhrase, shots, ui, versions } from "./copy.js";

const base = import.meta.env.BASE_URL;
const releaseApi = "https://api.github.com/repos/lolcema10/site/releases";
const langKey = "works-site-lang";

function archiveHref(version, file) {
  return `https://github.com/lolcema10/site/releases/download/v${version}/${file}`;
}

function storedLang() {
  try {
    return localStorage.getItem(langKey) === "en" ? "en" : "ru";
  } catch {
    return "ru";
  }
}

export default function App() {
  const [lang, setLang] = useState(storedLang);
  const [versionId, setVersionId] = useState(versions[0].id);
  const [counts, setCounts] = useState(null);
  const [countsError, setCountsError] = useState(false);
  const text = ui[lang];
  const version = versions.find((item) => item.id === versionId) ?? versions[0];
  const added = version.added?.[lang];
  const downloads = [
    { os: "macOS", ...version.macos },
    { os: "Windows", ...version.windows },
  ];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = text.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", text.description);
    try {
      localStorage.setItem(langKey, lang);
    } catch {
      // Private mode can block storage. The choice still applies for this visit.
    }
  }, [lang, text]);

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
    if (!counts) return undefined;
    return counts[version.id]?.[file] ?? 0;
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
        <div className="top-actions">
          <div className="lang" role="group" aria-label={text.languageLabel}>
            <button type="button" aria-pressed={lang === "ru"} onClick={() => setLang("ru")}>
              RU
            </button>
            <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
              EN
            </button>
          </div>
          <a className="top-link" href="#download">
            {text.downloadNav}
          </a>
        </div>
      </header>

      <main id="start">
        <section className="hero">
          <img className="hero-icon" src={`${base}icon.png`} alt="" width="160" height="160" />
          <div>
            <p className="eyebrow">
              {text.versionEyebrow} {version.label}
            </p>
            <h1>{text.heading}</h1>
            <p className="lead">{text.lead}</p>
          </div>
        </section>

        <section id="download" className="download-panel" aria-labelledby="download-title">
          <h2 id="download-title">{text.downloadTitle}</h2>
          <fieldset className="versions">
            <legend>{text.versionLegend}</legend>
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
                {index === 0 ? <small>{text.latest}</small> : null}
              </label>
            ))}
          </fieldset>
          <p className="version-date">
            {text.builtOn} {version.date[lang]}
          </p>
          {added ? (
            <div className="changelog">
              <h3>
                {text.addedIn} {version.label}
              </h3>
              <ul>
                {added.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <p className="download-count">
            {countsError ? text.countError : total === null ? text.countLoading : text.countTotal(total)}
          </p>
          <div className="downloads">
            {downloads.map((item) => {
              const count = fileCount(item.file);
              return (
                <a key={item.os} className="download" href={archiveHref(version.id, item.file)}>
                  <span className="download-os">
                    {text.downloadFor} {item.os}
                  </span>
                  <span className="download-meta">
                    {item.file} · {item.size[lang]} · {item.detail}
                    {typeof count === "number" ? ` · ${downloadPhrase(count, lang)}` : ""}
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="block" aria-labelledby="shots-title">
          <h2 id="shots-title">{text.shotsTitle}</h2>
          <div className="shots">
            {shots.map((shot) => (
              <figure key={shot.src}>
                <img
                  src={`${base}${shot.src}`}
                  width={shot.width}
                  height={shot.height}
                  alt={shot.alt[lang]}
                />
                <figcaption>{shot.caption[lang]}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="block" aria-labelledby="inside-title">
          <h2 id="inside-title">{text.insideTitle}</h2>
          <dl className="features">
            {text.features.map(([name, line]) => (
              <div key={name}>
                <dt>{name}</dt>
                <dd>{line}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="block" aria-labelledby="games-title">
          <h2 id="games-title">{text.gamesTitle}</h2>
          <ul className="games">
            {text.games.map((game) => (
              <li key={game}>{game}</li>
            ))}
          </ul>
        </section>

        <section className="block" aria-labelledby="requirements-title">
          <h2 id="requirements-title">{text.requirementsTitle}</h2>
          <div className="requirements">
            <article>
              <h3>macOS</h3>
              <p>{text.macRequirement}</p>
              <p>{text.macSize}</p>
            </article>
            <article>
              <h3>Windows</h3>
              <p>{text.winRequirement}</p>
              <p>{text.winSize}</p>
            </article>
          </div>
          <p className="note">{text.runtimeNote}</p>
          <p className="note">{text.updateNote}</p>
        </section>

        <section className="block" aria-labelledby="install-title">
          <h2 id="install-title">{text.installTitle}</h2>
          <div className="install">
            <article>
              <h3>macOS</h3>
              <ol>
                {text.macSteps.map((step) => (
                  <li key={step}>{withPaths(step)}</li>
                ))}
              </ol>
            </article>
            <article>
              <h3>Windows</h3>
              <ol>
                {text.winSteps.map((step) => (
                  <li key={step}>{withPaths(step)}</li>
                ))}
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

function withPaths(step) {
  const parts = step.split(/(works\.app|works\.exe|runtime)/);
  return parts.map((part, index) =>
    part === "works.app" || part === "works.exe" || part === "runtime" ? (
      <span key={`${part}-${index}`} className="path">
        {part}
      </span>
    ) : (
      part
    ),
  );
}
