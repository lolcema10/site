// Первая запись выбирается при открытии страницы. Новую версию добавляйте сверху.
export const versions = [
  {
    id: "1.3",
    label: "1.3",
    date: { ru: "8 октября 2026", en: "8 October 2026" },
    added: {
      ru: [
        "Будильник вместе с таймером и секундомером.",
        "Мини-игры «Шахматы» и «Морской бой».",
        "Счёт партий и побед в мини-играх.",
        "Перевод температуры, длины и веса в калькуляторе.",
        "Закрепление файлов.",
        "Галочки в заметках.",
        "Снимок экрана и пипетка в редакторе фото.",
      ],
      en: [
        "An alarm clock, next to the timer and stopwatch.",
        "Chess and Sea battle mini-games.",
        "Match and win counts in the mini-games.",
        "Temperature, length, and weight conversion in the calculator.",
        "Pinning files.",
        "Checkboxes in notes.",
        "A screenshot and an eyedropper in the photo editor.",
      ],
    },
    macos: { file: "works-macos.zip", size: { ru: "45 МБ", en: "45 MB" }, detail: "works.app" },
    windows: { file: "works-windows.zip", size: { ru: "58 МБ", en: "58 MB" }, detail: "works.exe" },
  },
  {
    id: "1.2",
    label: "1.2",
    date: { ru: "8 октября 2026", en: "8 October 2026" },
    added: {
      ru: [
        "Таймер и секундомер.",
        "Мини-игры «Судоку» и «Шашки».",
        "Закрепление заметок.",
        "Метроном в пианино.",
        "Своя картинка на фон в настройках.",
        "Отмена последнего шага в редакторах видео и звука.",
      ],
      en: [
        "A timer and a stopwatch.",
        "Sudoku and Checkers mini-games.",
        "Pinning notes.",
        "A metronome in the piano.",
        "A custom wallpaper in settings.",
        "Undo for the last step in the video and audio editors.",
      ],
    },
    macos: { file: "works-macos.zip", size: { ru: "45 МБ", en: "45 MB" }, detail: "works.app" },
    windows: { file: "works-windows.zip", size: { ru: "58 МБ", en: "58 MB" }, detail: "works.exe" },
  },
  {
    id: "1.1",
    label: "1.1",
    date: { ru: "8 октября 2026", en: "8 October 2026" },
    macos: { file: "works-macos.zip", size: { ru: "45 МБ", en: "45 MB" }, detail: "works.app" },
    windows: { file: "works-windows.zip", size: { ru: "58 МБ", en: "58 MB" }, detail: "works.exe" },
  },
  {
    id: "1.0",
    label: "1.0",
    date: { ru: "7 октября 2026", en: "7 October 2026" },
    macos: { file: "works-macos.zip", size: { ru: "45 МБ", en: "45 MB" }, detail: "works.app" },
    windows: { file: "works-windows.zip", size: { ru: "58 МБ", en: "58 MB" }, detail: "works.exe" },
  },
];

export const shots = [
  {
    src: "shots/files.png",
    width: 1080,
    height: 700,
    caption: { ru: "Файлы", en: "Files" },
    alt: {
      ru: "Окно «Моё приложение» со списком файлов в хранилище",
      en: "The My app window with the file storage list",
    },
  },
  {
    src: "shots/editor.png",
    width: 980,
    height: 720,
    caption: { ru: "Редактор фото", en: "Photo editor" },
    alt: {
      ru: "Окно редактора фото с открытой картинкой и ползунками света",
      en: "The photo editor window with a picture open and the light sliders",
    },
  },
  {
    src: "shots/game.png",
    width: 1080,
    height: 740,
    caption: { ru: "Шахматы", en: "Chess" },
    alt: {
      ru: "Окно мини-игр с партией в шахматы",
      en: "The mini-games window with a game of chess",
    },
  },
];

const features = {
  ru: [
    ["Файлы", "Папки, поиск и закрепление фото, видео и звука."],
    ["Редактор фото", "Правка фотографий, снимок экрана и пипетка."],
    ["Редактор видео", "Ролики mp4, mov и m4v."],
    ["Редактор звука", "Правка звуковых файлов."],
    ["Пианино", "Клавиши: пианино или гитара, и метроном."],
    ["Конвертер", "Фото, звук и видео в другой формат."],
    ["Заметки", "Короткие записи, закрепление и галочки."],
    ["Диктофон", "Голосовые заметки."],
    ["Калькулятор", "Вычисления и перевод температуры, длины и веса."],
    ["Таймер", "Обратный отсчёт, секундомер и будильник."],
    ["Часы и расписание", "Дата, время и напоминания."],
    ["Настройки", "Язык, тема и своя картинка на фон."],
  ],
  en: [
    ["Files", "Folders, search, and pinning for photos, video, and audio."],
    ["Photo editor", "Edit photos, take a screenshot, and pick a color."],
    ["Video editor", "Clips in mp4, mov, and m4v."],
    ["Audio editor", "Edit audio files."],
    ["Piano", "Piano or guitar keys, and a metronome."],
    ["Converter", "Turn a photo, audio, or video into another format."],
    ["Notes", "Short notes, pinning, and checkboxes."],
    ["Voice memo", "Voice notes."],
    ["Calculator", "Math, plus temperature, length, and weight conversion."],
    ["Timer", "A countdown, a stopwatch, and an alarm."],
    ["Clock and schedule", "The date, the time, and reminders."],
    ["Settings", "Language, theme, and a custom wallpaper."],
  ],
};

const games = {
  ru: [
    "2048",
    "Крестики-нолики",
    "Змейка",
    "Дурак",
    "Косынка",
    "Сапёр",
    "Тетрис",
    "Реверси",
    "Арканоид",
    "Судоку",
    "Шашки",
    "Шахматы",
    "Морской бой",
  ],
  en: [
    "2048",
    "Tic-tac-toe",
    "Snake",
    "Durak",
    "Solitaire",
    "Minesweeper",
    "Tetris",
    "Reversi",
    "Arkanoid",
    "Sudoku",
    "Checkers",
    "Chess",
    "Sea battle",
  ],
};

export const ui = {
  ru: {
    title: "works — Моё приложение",
    description:
      "Скачать works для macOS и Windows: файлы, редакторы фото, видео и звука, заметки, диктофон и мини-игры.",
    downloadNav: "Скачать",
    languageLabel: "Язык страницы",
    versionEyebrow: "Версия",
    heading: "Моё приложение",
    lead:
      "Настольная программа для файлов и обычных дел: редакторы, заметки, диктофон, калькулятор и несколько игр. Среда выполнения уже внутри архива, отдельно ставить Java не нужно.",
    downloadTitle: "Скачать",
    versionLegend: "Версия",
    latest: "новее",
    builtOn: "Сборка от",
    addedIn: "Что добавлено в",
    countError: "Счётчик сейчас недоступен",
    countLoading: "Считаем скачивания…",
    countTotal: (total) => `Скачиваний этой версии: ${total}`,
    downloadFor: "Скачать для",
    shotsTitle: "Как выглядит",
    insideTitle: "Что внутри",
    gamesTitle: "Мини-игры",
    requirementsTitle: "Требования",
    macRequirement: "macOS 14 или новее, процессор Apple.",
    macSize: "Архив 45 МБ. После распаковки works.app занимает около 124 МБ.",
    winRequirement: "Windows 11, 64-bit.",
    winSize: "Архив 58 МБ. После распаковки папка занимает около 185 МБ.",
    runtimeNote: "Java уже лежит внутри архива.",
    updateNote:
      "Обновление не стирает заметки, файлы и записи. Они остаются в отдельной папке: на Mac это ~/Library/Application Support/works, на Windows — %APPDATA%\\works. Заменяется только само приложение.",
    installTitle: "Как запустить",
    macSteps: [
      "Скачайте архив и распакуйте его.",
      "Перенесите works.app в папку «Программы».",
      "При первом запуске щёлкните по приложению правой кнопкой и выберите «Открыть». macOS просит подтверждение, потому что сборка не подписана Apple.",
    ],
    winSteps: [
      "Скачайте архив и распакуйте его в отдельную папку.",
      "Запустите works.exe. Каталог runtime должен остаться рядом с ним.",
    ],
    features: features.ru,
    games: games.ru,
  },
  en: {
    title: "works — My app",
    description:
      "Download works for macOS and Windows: files, photo, video, and audio editors, notes, a voice memo, and mini-games.",
    downloadNav: "Download",
    languageLabel: "Page language",
    versionEyebrow: "Version",
    heading: "My app",
    lead:
      "A desktop app for files and everyday tasks: editors, notes, a voice memo, a calculator, and a few games. The runtime is already in the archive, so you do not install Java yourself.",
    downloadTitle: "Download",
    versionLegend: "Version",
    latest: "latest",
    builtOn: "Build from",
    addedIn: "Added in",
    countError: "The counter is unavailable right now",
    countLoading: "Counting downloads…",
    countTotal: (total) => `Downloads of this version: ${total}`,
    downloadFor: "Download for",
    shotsTitle: "What it looks like",
    insideTitle: "What's inside",
    gamesTitle: "Mini-games",
    requirementsTitle: "Requirements",
    macRequirement: "macOS 14 or newer, Apple silicon.",
    macSize: "The archive is 45 MB. Unpacked, works.app is about 124 MB.",
    winRequirement: "Windows 11, 64-bit.",
    winSize: "The archive is 58 MB. Unpacked, the folder is about 185 MB.",
    runtimeNote: "Java is already inside the archive.",
    updateNote:
      "Updating does not erase notes, files, or recordings. They stay in a separate folder: ~/Library/Application Support/works on a Mac, and %APPDATA%\\works on Windows. Only the app itself is replaced.",
    installTitle: "How to launch",
    macSteps: [
      "Download the archive and unpack it.",
      "Move works.app into the Applications folder.",
      "On the first launch, right-click the app and choose Open. macOS asks for confirmation because the build is not signed by Apple.",
    ],
    winSteps: [
      "Download the archive and unpack it into its own folder.",
      "Run works.exe. The runtime folder has to stay next to it.",
    ],
    features: features.en,
    games: games.en,
  },
};

export function downloadPhrase(count, lang) {
  if (lang === "en") {
    return count === 1 ? "1 download" : `${count} downloads`;
  }
  const n = Math.abs(count) % 100;
  const last = n % 10;
  if (n > 10 && n < 20) return `${count} скачиваний`;
  if (last === 1) return `${count} скачивание`;
  if (last >= 2 && last <= 4) return `${count} скачивания`;
  return `${count} скачиваний`;
}
