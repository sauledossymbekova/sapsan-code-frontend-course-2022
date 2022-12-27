// Lecture 1 

# 1
- Что такое Веб программирование?
- Что такое фронтенд? html,css,js
- html
    - пример с сайта 
    - инструменты разработчика ? https://www.google.com/chrome/dev/

- html для начала
    - тэги, типы тэгов, примеры
    - документация mdn
    - аттрибуты
    - комментарии

- vscode
    - почему?
    - plugins, Live Server Prettier
        ctrl + shift + f или option + shift + f
    - codepen у кого не волучилось на всякий


# 2
- html детально
    - почему index.html
    - редактор сам закроет тэг emmet plugin
    - в vscode tab + название тэга = удобно
    - шаблон html файлов

    - DOCTYPE
    - кодировка 
    - html
    - head
    - body
    - title
    PRACTISE:
    -h1, p
    - выделить элементы <em> <i> <strong>
    - структура заголовки
    - ul, li связанные тэги
        ul type
    - ol, li

    
    - <a> href target
    - многостраничный сайт href="some.html"
    - <img> src, внешняя ссылка, локальная ссылка
        alt
    - <table>
        <tr>, <td>
        show with border
        <th> table headers
        thead, tbody, tfoot
    - попробовать сложить в сетку через table, cellspacing

    - form
        input
            input type
        label

# 3
- css
    - что такое css, теория
    - как смотреть через девтулс
    - как подключить 
        через инлайн
        через тег style
        через внешний файл
    
    - селекторы id > class > tag-name > *
        tag name
        id
        class
        global selector *

    Примеры со свойствами
        - font
        - text
        - image width, height, border-radius
        - margin, padding, border
    
# 4
- разница между хром дев и обычным

- css детально
    - Блочное разделение
        разделить блоки по классам
        задать: width, max-width, margin,
    
    - Box model 
        https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model 
        - padding
        - border, border-width
        - margin
        - что будет если задавать несколько значений? на примере дев тулс
        - top, bottom, left, right
        
        вложенности показать на примере
            - как достать дочерние все элементы в другом?
            - .some-class some-element
            - .some-class > some-element
            - размерность элемента
            - box-sizing, float, 

            - margin collapsing это? https://www.w3schools.com/css/tryit.asp?filename=trycss_margin_collapse 
            <!-- - display-inline, inline-block,inline-table -->

    как писать чисто?
        - задать общие вещи ( img, font, a)
        - разделить по блокам
        - задать классы логически по разделам
            padding, margin, border-radius
        по свойству
            background-color
        по элементам (ul, ol, table)
            - у списков есть свои дефолтные свойства (padding, list-style,)
            - table имеет особенное отображение, на примере margin, pseudoselectors :nth-child()
            - как стилизовать форму?
                разделить логически
# 5

- css detailed
    - display чтобы все было не только вертикально
    - попробовать добавить чуть жизни от действия юзера 
    - позиционирование
    https://developer.mozilla.org/ru/docs/Web/CSS/position
    - flex-box https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    - media https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
    - animation


# 6
- css advanced
    - responsive vs adaptive
    - responsive
        - meta tag for viewport
        - media
        - images, text, units

        - flex

# 7
- SASS
    - как добавить sass в ваш проект?
        - sass compiler, для чего он, как с ним работать
        - комментарий
    - переменные $, для чего они нужны, с примером
    - вложенности, как в css, как в sass
        - добавлять псевдо селекторы для элементов во вложенностях &:
    - организация кода, разделение кода
        - @import _someComponent (импорты)

# 8
- Sass advanced
        - @mixin @include 
            add variables, style rules with it
        - operators 
        - functions
        - @extend (наследование, inheritance)
        - built in funct

    - операторы

- naming conventions and some css basics
- some new selectors

- Github
    - залить свой сайт

# 9
- Bootstrap
# 10
- Bootstrap

# 11
- JS
    - variables (const, let, var)
    - data types (number, string, boolean, ...)
    - console, alert, prompt
    
    - math operators: + - / *
    - conditional operator: if
    - >= <= > <