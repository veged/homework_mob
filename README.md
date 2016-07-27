ДЗ №4: приложение с использованием PhoneGap
-----

### выбор framework на чем написать 
нужен был вариант с готовыми компонентами, выбирал из:
- sencha (год работаю с ней)
- bem
- framework7

bootstrap, jquerymobile применять не стал - это вроде и не фреймворки, а библиотеки - если я верно понимаю разницу

выбрал bem, за основу взял "быстрый старт"

удалось написать что то напоминющее окно программы "телепрограммы", с боковым слайдером-меню

подключил плагин pep.js для событий pointerevents, сделал возможность скрыть меню свайпом влево


phonegap
-----
поставил через npm, работал через командную строку.


создание приложение 

```sh
phonegap create --name "homework-mob" --id "homework.mob" --template blank homework-mob
```


после сборки проложения под ios
```sh
phonegap build ios
```

выявилась проблема - не видно statusBar (заряд батареи, сеть и т.д.)
проверил все настройки в config.xml - не помогло, создал заново проект phonegap - даже hello world. Не помогло - пустой проект, собранный на ios также скрывал statusBar

причина - не работал плагин  statusBar, при создании нового проекта phonegap. По умолчанию при создании нового проекта использовался шаблон "hello world" 

Решило проблему создание с пустым шаблоном

Скриншоты
- https://github.com/semenovem/homework_mob/blob/master/screenshot/1.PNG  (начало)
- https://github.com/semenovem/homework_mob/blob/master/screenshot/2.PNG  (показали меню)
- https://github.com/semenovem/homework_mob/blob/master/screenshot/3.PNG  (двигаем меню пальцем)


