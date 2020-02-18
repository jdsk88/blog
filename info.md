Praca domowa do szkolenia ‘Programowanie w języku JavaScript’- szacowany czas wykonania 16h

1. Informacje wstępne.
   Niniejszy dokument opisuje zadanie do samodzielnego wykonania po szkoleniu‘Programowanie w języku JavaScript’ zrealizowanym w ramach projektu Programator.

Do wykonania tego ćwiczenia niezbędne są wiedza oraz umiejętności nabyte w trakcie szkolenia oraz w oparciu o udostępnione wcześniej materiały do e-learningu.

2. Ogólny opis biznesowy zadania.

Celem zadania jest przygotowanie klas modelu dla aplikacji typu blog.

Dalsze elementy aplikacji będą realizowane w trakcie kolejnych kursów realizowanych w ramachścieżki szkoleniowej.

Aplikacja „Blog” ma pozwalać na publikowanie artykułów przez zalogowanych użytkowników.

Artykuły mogą być komentowane przez użytkowników zalogowanych lub nie zalogowanych.

Artykuł może być widoczny na stronie w określonych zakresach czasowych.

Aplikacja będzie zawierać wyszukiwarkę artykułów, w której będzie możliwe wyszukiwanie artykułu m.in. po tytule, autorze.

Lista artykułów powinna pozwalać nasortowanie artykułów m.in. wg autora, czasu stworzenia, ilości komentarzy, daty ostatniejmodyfikacji, daty stworzenia.

3. Opis zadania
   3.1.
   Należy stworzyć model danych w formie klas w języku JavaScript (ES6 i wyższe wersje)obejmujący następujące elementy:
   a)
   Użytkownik – zawierające m.in. takie elementy jak login, hasło, nazwę, imięi nazwisko,datę założenia profilu, preferencje wizualizacji listy artykułów (np. domyślne sortowanie).
   b)
   Artykuł – zawierający informacje z jednego wpisu na blogu, m.in. treść, datę utworzenia,datę ostatniej modyfikacji, autora, tytuł wpisu, ilość wyświetleń, słowa kluczowepozwalające na szybkie odnalezienie artykułu przez wyszukiwarkę.
   c)
   Komentarz – opisujący komentarz do artykułu na blogu, zawierający m.in. autora, treść,datę utworzenia, ilość ‘plusów’ i ‘minusów’ komentarza przez innych użytkowników (‘plusy’== lajki ;)).
   d)
   Ustawienia artykułu dotyczące jego widoczności na stronie, zawierający m.in. preferencjeczasowe, ważność artykułu.

Wyżej wymienione klasy należy stworzyć w formie jeden plik źródłowy na jednąklasę.
Nazwy klas oraz ich elementów składowych (pola, metody) powinny być w językuangielskim.
Powyższa lista klas nie jest zamknięta, jeśli w ramach analizy zadania pojawisię konieczność implementacji nowych bądź innych niż wyżej opisane.

3.2.
W klasach oprócz atrybutów powinny znaleźć się następujące metody (funkcje):
a) walidujące poprawność zawartości danego obiektu,
b) zwracające informację o zawartości obiektu,

Ich nazwy powinny być spójne w ramach modelu (tj. wg jednej zasady w każdej z klas).

3.3. W ramach testu stworzonego rozwiązania należy napisać kod, który stworzy takąliczbę obiektów ww. klas żeby sprawdzić sposób ich tworzenia oraz działanie metod zaimplementowanych wg punktu 3.2.

3.4. W razie konieczności użycia mechanizmu importu plików źródłowych JavaScript należyużyć mechanizmu import / export z ES6.
