# project-CodeMasters02

We are students of Group number 2 of GоIT academy 🔥 🚀. We named **"Code Masters"


If you like our work, don't forget to put a ⭐
THIS PROJECT WAS CREATED BY:

- :man_student:[**Team Lead:** Lytvyn Svetlana](https://github.com/0trava)
- :man_student:[**Scrum master** & **Full stack developer**: ](https://github.com/Tetiana1409)


- :man_student:[**Full stack developer**: Lytvyn Svetlana](https://github.com/0trava)
- :man_student:[**Full stack developer**: Olena Harkusha](https://github.com/OlenaHarkusha)
- :man_student:[**Full stack developer**: Olha Lushina](https://github.com/OlhaLushina)
- :man_student:[**Full stack developer**: Anastasiia Ablieieva](https://github.com/Anastasiia-Ablieieva)
- :man_student:[**Full stack developer**: Oleg Artemenko](https://github.com/OlegArt1)
- :man_student:[**Full stack developer**: Anatolii Koniev](https://github.com/Demag0g1)
- :man_student:[**Full stack developer**: Tuschenko Dmutro](https://github.com/T-Dmutro)
- :man_student:[**Full stack developer**: Yaroslav Yakovenko](https://github.com/Yaroslav-Yaroslav)
- :man_student:[**Full stack developer**: Oleksandr Vysitskyi](https://github.com/Oleksandr1301)
- :man_student:[**Full stack developer**: Svitlana Shvydanenko ](https://github.com/Svitlana-Sh)
- :man_student:[**Full stack developer**: Volodymyr Holotnyk](https://github.com/Golotniks94)
- :man_student:[**Full stack developer**: Pavlo Skrypniuk](https://github.com/Skripnuyk)
- :man_student:[**Full stack developer**: Meshchaninova Yuliia](https://github.com/JuliaPilik)




Made by design  <a href="https://www.figma.com/file/kXtsjq7Tts3YzolUVqgNsp/Goose-Track?node-id=0%3A1&t=1A4UeIYiOYEgfGkN-1">LINK</a>

## 🌠 Initial commands:
```
$ npm instal

$ npm start
```
## 🌠список команд для роботи з терміналом
```
         git clone https://посилання_на_репозиторій клонуєте репозиторій  
 	      git checkout ‘назва-гілки’ перехід на гілку ‘назва-гілки’
         git pull origin ‘назва-гілки’ стягує останні зміни гілки ‘назва-гілки’
         git checkout -b ‘назва-нової-гілки’ створює нову гілку 
         git add . та  git commit -m “назва-коміта” записує зміни до локальної гілки
         git push origin ‘назва-вашої-гілки’ публікує ваші зміни на гілці віддаленого репозиторію
         git merge ‘назва-гілки’ залиття коду з гілки ‘назва-гілки’ на поточну гілку
         git branch -d ‘назва-гілки’ видалення гілки ‘назва-гілки’
         git fetch  стягує всі зміни з віддаленого репозиторію
```




## 🌠Структура папок
#### components/
Содержит повторно используемые компоненты, которые чаще всего используются для создания компонентов Feature или Page.
Эти компоненты почти всегда чисты и презентабельны, без побочных эффектов.
#### constants/
Содержит многоразовые и неизменяемые строки, такие как URL-адреса или шаблоны регулярных выражений.
Для большинства проектов достаточно одного индексного файла.
#### contexts/
Содержит повторно используемые контексты, используемые для предоставления данных через дерево компонентов.
При использовании Redux в этом, скорее всего, нет необходимости.
#### features/
Содержит многоразовые компоненты функций. Компонент Feature - это концепция, вдохновленная Redux, в которой вся логика, необходимая для функции, размещена в одном каталоге. Компонент Feature часто состоит из множества других компонентов, локальных или общих. То же самое верно для всех ресурсов: утилит, типов, ловушек и так далее.
Компоненты функции часто включают побочные эффекты.
Если вы используете Redux и взаимодействует с Store, компонент Feature будет включать файл среза, который определяет «срез» Redux Store, который представляет функция.
#### layouts/
Содержит повторно используемые компоненты макета. Компонент макета - это компонент, составляющий макет страницы. Он часто импортирует такие компоненты, как app-bar, app-footer, app-side-nav.
Если ваш проект, вероятно, будет иметь только один макет, этот каталог может не понадобиться, и компонент макета может находиться в каталоге компонентов.
#### hooks/
Contains reusable React Hooks.
#### pages/
Содержит компоненты страницы. Каждый компонент страницы связан с маршрутом.
Компоненты страницы составляют содержимое страницы путем импорта компонентов и компонентов функций.
Компонент страницы должен редко включать побочные эффекты и вместо этого должен делегировать побочные эффекты компонентам функций.
#### services/
Содержит повторно используемый код для взаимодействия с API, часто в форме перехватчиков, и в идеале с использованием инструмента кеширования сервера, такого как React Query или RTK Query.
Не путайте это со службой в стиле Angular, которая предназначена для внедрения функций в компоненты. React обрабатывает этот сценарий, используя контексты и хуки. Этот каталог должен содержать только код для взаимодействия с API.
Вдохновленный рекомендацией RTK Query хранить определение API в одном месте. Это единственный пример того, как мы намеренно нарушаем правило «сначала локальные». Мне нравится думать об определениях API как об их собственной модульной функции. На самом деле, каталог features / api нередко используется вместо каталога служб.
С нашей точки зрения, гораздо проще отслеживать, как ведут себя запросы, аннулирование кеша и общая конфигурация приложения, когда они все находятся в одном центральном месте, по сравнению с наличием X пользовательских хуков в разных файлах по всему приложению.

RTK

#### styles/
Многоразовые или глобальные стили.
Могут включать конфигурации, сбросы или переменные.
#### types/
Многоразовые типы для проектов, использующих TypeScript или Flow.
Я часто помещаю свои многоразовые схемы Zod в этот каталог и экспортирую предполагаемый тип.
#### utils/
Многоразовые служебные функции.
Эти функции всегда должны быть чистыми и не вызывать побочных эффектов.
store.ts
При использовании Redux в этот файл вы импортируете все свои фрагменты и настраиваете хранилище Redux.
#### Pro Tips
Читайте официальную документацию каждый раз, когда начинаете новый проект. Вы никогда не знаете, какой новый инструмент могла добавить библиотека с момента последней реализации.
Прекратите использовать PascalCase для имен файлов. Вместо этого используйте kebab-case для всех файлов.
Используйте инструмент состояния сервера, например React Query или Redux Toolkit Query.
Используйте библиотеку компонентов, например MUI.
Для обычных хуков используйте библиотеку хуков, например usehooks-ts.




