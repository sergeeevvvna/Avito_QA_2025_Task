# E2E тесты

### Шаги установки:
```bash
# 1. Клонировать репозиторий
git clone https://github.com/sergeeevvvna/Avito_QA_2025_Task.git
cd Avito_QA_2025_Task

# 2. Установить зависимости
npm install

# 3. Установить браузеры для тестов
npx playwright install

# Запуск всех тестов
npx playwright test

# Запуск с отображением браузера
npx playwright test --headed

# Запуск конкретного теста
npx playwright test tests/openGameCard.test.ts

# Генерация отчета
npx playwright show-report

Avito_QA_2025_Task/
├── tests/
│   ├── openGameCard.test.ts    # Тест открытия карточки
│   ├── cardCountDisplay.test.ts # Тест отображения карточек
│   └── pagination.test.ts      # Тест пагинации
├── TESTCASES.md               # Тест-кейсы
├── BUGS.md                    # Баг-репорты
├── package.json
├── Avito_QA_1.1.md            #Задание 1
├── Readme.md                  #запуск
└── playwright.config.ts       # Конфиг Playwright
