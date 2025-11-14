# 🚗 Car Photo Enhancer

> Profesjonalna Edycja Zdjęć Samochodowych

[![Licencja: MIT](https://img.shields.io/badge/Licencja-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Gwiazdy GitHub](https://img.shields.io/github/stars/bmcodex/Car-Photo-Enhancer?style=social)](https://github.com/bmcodex/Car-Photo-Enhancer)
[![Forki GitHub](https://img.shields.io/github/forks/bmcodex/Car-Photo-Enhancer?style=social)](https://github.com/bmcodex/Car-Photo-Enhancer)

## 📸 Przegląd

**Car Photo Enhancer** to zaawansowana aplikacja webowa do edycji zdjęć, specjalnie zaprojektowana dla fotografii samochodowej. Łączy profesjonalne narzędzia edycji z intuicyjnym interfejsem inspirowanym Instagramem, czyniąc łatwym dla każdego tworzenie oszałamiających zdjęć samochodów.

Niezależnie od tego, czy jesteś dealerem samochodów, fotografem, entuzjastą czy twórcą treści, Car Photo Enhancer zapewnia wszystko, co potrzebujesz do ulepszenia zdjęć samochodów za pomocą profesjonalnych filtrów i narzędzi edycji.

## ✨ Główne Funkcje

### 🎨 5 Profesjonalnych Presetów

Każdy preset jest starannie opracowany dla konkretnych scenariuszy fotografii samochodowej:

- **✨ Gloss** - Wysoki połysk z jasnymi refleksami dla wyglądu polskiego, gotowego do salonu
- **🔷 Metallic Reflection** - Efekty odbijające się na powierzchni idealne do metalicznych lakierów
- **🎨 Deep Paint** - Bogate, nasycone kolory, które sprawiają, że lakier Twojego samochodu się wyróżnia
- **🌃 Night Neon** - Dramatyczne efekty neonowego światła do kreatywnej fotografii nocnej
- **⚙️ Wheel Detail Enhancer** - Wzmocnienie ostrości i kontrastu dla oszałamiających szczegółów kół

### 🛡️ Zaawansowane Narzędzia Edycji

#### Zamazywanie Tablic Rejestracyjnych
- Automatyczne wykrywanie obszarów tablic rejestracyjnych
- Regulowany promień rozmycia (5-50px)
- Podgląd w czasie rzeczywistym ze wskaźnikami obszaru
- Ochrona prywatności dla udostępnianych zdjęć

#### Usuwanie Odbić i Blasku
- Inteligentny algorytm wykrywania odbić
- Regulowana intensywność (0-100%)
- Zachowuje jakość obrazu podczas zmniejszania niechcianych odbić
- Idealne do zdjęć wykonanych w jasnym słońcu

#### Korekcja Kolorów
- **Jasność**: Dostosuj oświetlenie (-50 do +50)
- **Kontrast**: Wzmocnij definicję i dramatyzm (-50 do +50)
- **Nasycenie**: Kontroluj intensywność kolorów (-50 do +100)
- **Temperatura**: Regulacja balansu bieli (ciepły/chłodny)
- Podgląd w czasie rzeczywistym wszystkich dostosowań

#### Porównanie Przed/Po
- Interaktywny slider do porównania obok siebie
- Przeciągnij, aby porównać różne obszary
- Przyjazne dla urządzeń dotykowych na urządzeniach mobilnych
- Idealne do weryfikacji edycji

### 🎬 Interfejs w Stylu Instagrama

- Czysty, intuicyjny design inspirowany Instagramem
- Gładkie animacje i przejścia
- Responsywny layout dla wszystkich urządzeń
- Wsparcie dla motywów ciemnych i jasnych
- Przesyłanie zdjęć poprzez przeciągnięcie i upuszczenie

### 📊 Historia Edycji i Cofnij

- Śledź wszystkie zastosowane edycje
- Funkcjonalność Cofnij, aby przywrócić zmiany
- Wizualna wskazówka liczby edycji
- Edycja niedestrukcyjna

### 💾 Eksport Wysokiej Jakości

- Pobieraj edytowane zdjęcia w formacie JPEG
- Regulowane ustawienia jakości
- Zoptymalizowane rozmiary plików
- Nazwy plików z sygnaturą czasową

## 🚀 Szybki Start

### Szybki Start (5 Minut)

```bash
# 1. Klonuj repozytorium
git clone https://github.com/bmcodex/Car-Photo-Enhancer.git
cd Car-Photo-Enhancer

# 2. Zainstaluj zależności
pnpm install

# 3. Skonfiguruj środowisko
cp .env.example .env.local
# Edytuj .env.local ze swoimi ustawieniami

# 4. Skonfiguruj bazę danych
pnpm db:push

# 5. Uruchom serwer deweloperski
pnpm dev
```

Odwiedź `http://localhost:3000` w przeglądarce.

### Pierwsza Edycja

1. Zaloguj się na swoje konto
2. Przesyłaj zdjęcie samochodu (JPEG, PNG lub WebP)
3. Wybierz preset lub ręcznie dostosuj filtry
4. Użyj porównania przed/po, aby zweryfikować zmiany
5. Pobierz ulepszone zdjęcie

## 📋 Wymagania Systemowe

### Minimum
- Node.js 18+
- 512 MB RAM
- 500 MB pamięci
- Nowoczesna przeglądarka internetowa

### Rekomendowane
- Node.js 20+
- 2+ GB RAM
- 2+ GB pamięci
- Chrome, Firefox, Safari lub Edge (najnowsze wersje)

## 🛠️ Stack Technologiczny

### Frontend
- **React 19** - Nowoczesny framework UI
- **TypeScript** - Bezpieczne typowo programowanie
- **Tailwind CSS 4** - Stylowanie oparte na narzędziach
- **tRPC** - Bezpieczne typowo wywołania API
- **Vite** - Błyskawicznie szybkie narzędzie budowania

### Backend
- **Express.js** - Framework internetowy
- **Node.js** - Środowisko uruchomieniowe JavaScript
- **tRPC** - Bezpieczny typowo framework RPC
- **Drizzle ORM** - Bezpieczny typowo ORM bazy danych

### Baza Danych
- **MySQL/TiDB** - Relacyjna baza danych
- **Drizzle Kit** - Migracje bazy danych

### Przetwarzanie Obrazu
- **Canvas API** - Sprzętowo przyspieszana manipulacja obrazami
- **HTML5** - Nowoczesne standardy internetowe

## 📁 Struktura Projektu

```
car-photo-enhancer/
├── client/                      # Aplikacja frontend
│   ├── src/
│   │   ├── components/         # Komponenty React
│   │   │   ├── PhotoEditor.tsx
│   │   │   ├── PhotoUploader.tsx
│   │   │   ├── LicensePlateBurrer.tsx
│   │   │   ├── ReflectionRemover.tsx
│   │   │   ├── ColorCorrection.tsx
│   │   │   ├── BeforeAfterSlider.tsx
│   │   │   └── AdvancedEditor.tsx
│   │   ├── pages/              # Komponenty strony
│   │   ├── hooks/              # Niestandardowe hooki React
│   │   ├── utils/              # Funkcje narzędziowe
│   │   └── App.tsx             # Główna aplikacja
│   ├── public/                 # Zasoby statyczne
│   └── index.html              # Szablon HTML
│
├── server/                      # Aplikacja backend
│   ├── db.ts                   # Zapytania do bazy danych
│   ├── routers.ts              # Procedury tRPC
│   └── _core/                  # Rdzenna struktura
│
├── shared/                      # Wspólny kod
│   ├── presets.ts              # Presety filtrów
│   ├── constants.ts            # Stałe aplikacji
│   ├── types.ts                # Typy TypeScript
│   └── imageProcessing.ts      # Narzędzia obrazu
│
├── drizzle/                     # Baza danych
│   ├── schema.ts               # Schemat bazy danych
│   └── migrations/             # Migracje bazy danych
│
└── docs/                        # Dokumentacja
    ├── FEATURES.md
    ├── INSTALLATION.md
    ├── USAGE.md
    └── ARCHITECTURE.md
```

## 📖 Dokumentacja

Dostępna jest kompleksowa dokumentacja:

- **[FEATURES.md](FEATURES.md)** - Szczegółowe opisy funkcji
- **[INSTALLATION.md](INSTALLATION.md)** - Przewodnik instalacji i konfiguracji
- **[USAGE.md](USAGE.md)** - Przewodnik użytkownika i samouczki
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Architektura systemu i projektowanie
- **[API_DOCUMENTATION.md](API_DOCUMENTATION.md)** - Dokumentacja API
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Wytyczne dotyczące wkładu
- **[QUICK_START.md](QUICK_START.md)** - Przewodnik szybkiego startu

## 🎯 Przypadki Użycia

### 👨‍💼 Dealerzy Samochodów
Ulepszanie zdjęć pojazdów do ofert i zwiększanie zainteresowania kupujących

### 📸 Fotografowie
Profesjonalna edycja zdjęć samochodów za pomocą zaawansowanych narzędzi

### 🚗 Entuzjaści
Udostępnianie oszałamiających zdjęć samochodów w mediach społecznych

### 🏢 Firmy Ubezpieczeniowe
Dokumentacja stanu pojazdu z przejrzystością

### 🚕 Firmy Wynajmu
Tworzenie profesjonalnych zdjęć floty

## 🔒 Prywatność i Bezpieczeństwo

- **Przetwarzanie Po Stronie Klienta**: Całe przetwarzanie obrazu odbywa się w Twojej przeglądarce
- **Brak Przechowywania na Serwerze**: Zdjęcia nie są przechowywane na naszych serwerach
- **Bezpieczna Autentykacja**: OAuth 2.0 z Manus
- **Szyfrowanie HTTPS**: Wszystkie dane są szyfrowane w tranzycie
- **Prywatność Tablicy Rejestracyjnej**: Automatyczne zamazywanie informacji wrażliwych
- **Zgodność GDPR**: Pełna zgodność z przepisami ochrony danych

## 🚀 Wydajność

- **Aplikacja Filtrów Poniżej Sekundy**: Natychmiastowa informacja zwrotna na temat dostosowań
- **Gładkie Animacje 60fps**: Płynne doświadczenie użytkownika
- **Zoptymalizowany Rozmiar Bundla**: Szybkie ładowanie początkowe
- **Przyspieszenie Sprzętowe**: Przetwarzanie obrazu przyspieszane przez GPU
- **Efektywne Wykorzystanie Pamięci**: Obsługuje obrazy o wysokiej rozdzielczości

## 🎨 Przepływ Pracy

```
1. Przesłanie Zdjęcia
    ↓
2. Wybór Presetu (lub ręczne dostosowania)
    ↓
3. Dostrojenie Filtrów
    ↓
4. Usunięcie Informacji Wrażliwych (zamazanie tablic)
    ↓
5. Porównanie Przed/Po
    ↓
6. Pobranie Ulepszonego Zdjęcia
```

## 📊 Obsługiwane Formaty

| Format | Rozszerzenie | Jakość | Notatki |
|--------|-------------|--------|---------|
| JPEG   | .jpg      | Wysoka    | Rekomendowany |
| PNG    | .png      | Bezstratna| Większe pliki |
| WebP   | .webp     | Wysoka    | Nowoczesny format |

**Maksymalny rozmiar pliku**: 50 MB

## 🔧 Programowanie

### Dostępne Polecenia

```bash
# Uruchom serwer deweloperski
pnpm dev

# Sprawdzanie typów
pnpm type-check

# Buduj do produkcji
pnpm build

# Uruchom serwer produkcji
pnpm start

# Migracje bazy danych
pnpm db:push
pnpm db:generate

# Wyczyść artefakty budowania
pnpm clean
```

### Przepływ Pracy Programowania

1. Wprowadź zmiany w plikach źródłowych
2. Zmiany automatycznie przeładowują się w przeglądarce
3. Sprawdzanie typów uruchamia się automatycznie
4. Przetestuj swoje zmiany
5. Zatwierdź z opisowym komunikatem

## 🤝 Wkład

Zapraszamy do wkładu! Proszę zapoznać się z [CONTRIBUTING.md](CONTRIBUTING.md) w celu uzyskania wytycznych.

### Jak Wnieść Wkład

1. Rozwidlij repozytorium
2. Utwórz gałąź funkcji (`git checkout -b feature/amazing-feature`)
3. Wprowadź swoje zmiany
4. Zatwierdź swoje zmiany (`git commit -m 'Add amazing feature'`)
5. Wypchnij do gałęzi (`git push origin feature/amazing-feature`)
6. Otwórz Pull Request

## 📝 Licencja

Ten projekt jest licencjonowany na warunkach licencji MIT - zobacz plik [LICENSE](LICENSE) w celu uzyskania szczegółów.

## 🙏 Podziękowania

- **Zespół React** - Za niesamowity framework React
- **Tailwind Labs** - Za Tailwind CSS
- **Współpracownicy tRPC** - Za bezpieczne typowo API
- **Społeczność** - Za opinie i wkład

## 📞 Wsparcie

Potrzebujesz pomocy? Sprawdź nasze zasoby:

- 📖 [Dokumentacja](docs/)
- ❓ [FAQ](FAQ.md)
- 🐛 [Zgłoś Błąd](https://github.com/bmcodex/Car-Photo-Enhancer/issues)
- 💡 [Poproś o Funkcję](https://github.com/bmcodex/Car-Photo-Enhancer/issues)
- 📧 [Skontaktuj się z Pomocą](SUPPORT.md)

## 🗺️ Plan Rozwoju

### Wersja 1.0 ✅
- ✅ 5 profesjonalnych presetów
- ✅ Zamazywanie tablicy rejestracyjnej
- ✅ Usuwanie odbicia
- ✅ Korekcja kolorów
- ✅ Porównanie przed/po

### Wersja 1.1 (Planowana)
- Zaawansowane filtry AI
- Przetwarzanie wsadowe
- Dostosowywanie presetu
- Galeria zdjęć

### Wersja 1.2 (Planowana)
- Aplikacja mobilna (iOS/Android)
- Współpraca w czasie rzeczywistym
- Zaawansowana gradacja kolorów
- Udostępnianie presetu

### Wersja 2.0 (Przyszłość)
- Automatyczne ulepszanie zasilane AI
- Integracja mediów społecznych
- Narzędzia profesjonalne
- API dla deweloperów

## 📊 Statystyki

- **50+ Commitów Git** - Dobrze udokumentowana historia rozwoju
- **15+ Plików Dokumentacji** - Kompleksowe przewodniki
- **5 Profesjonalnych Presetów** - Filtry specyficzne dla samochodów
- **7 Zaawansowanych Narzędzi** - Kompletny zestaw edycji
- **100% TypeScript** - Bezpieczny typowo kod

## 🎓 Zasoby Edukacyjne

Ten projekt pokazuje:

- Nowoczesne wzorce React i hooki
- Najlepsze praktyki TypeScript
- tRPC do bezpiecznych typowo API
- Tailwind CSS do responsywnego projektowania
- Canvas API do przetwarzania obrazu
- Projektowanie bazy danych za pomocą Drizzle ORM
- Programowanie pełnego stosu

## 🌟 Daj Nam Gwiazdę!

Jeśli uważasz ten projekt za pomocny, rozważ danie mu gwiazdki ⭐

## 📱 Połącz się z Nami

- GitHub: [@bmcodex](https://github.com/bmcodex)
- Problemy: [Zgłoś błędy i poproś o funkcje](https://github.com/bmcodex/Car-Photo-Enhancer/issues)

---

**Wykonane z ❤️ przez zespół Car Photo Enhancer**

*Ulepszanie zdjęć samochodów, jeden preset na raz.*
