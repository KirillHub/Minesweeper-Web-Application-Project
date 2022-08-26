# Sapper game on native JS in functional style

Сразу хочу сказать, что версия и идея, которую я принял решение
взять за основу для создания данного приложения - хромовский онлайн сапёр.
Внешний вид и вся механика у этих приложений - аналогичны.

# Нужно зафиксить:
  1) Баг при первом клике. Если пользователь зажимает ЛКМ
  и перетаскивает зажатый блок на любой соседний блок, то 
  происходит поломка, т.к. функция по определению соседей-бомб 
  для первого клика не может понять, в какой клетке был курсор

  2) При рекурсивном открытии пустых клеток, если на клетках были
  флаги - они остаются.

  3) Баг с открытие доски (продумать реализацию режимов)


# TODO:
  1) Бургер-меню с кнопками состояний игрового режима

  # Функционал, разработка, описание:
  
  В этом разделе я хотел бы остановится на самых главных деталях, дабы
  не рассказывать про общий функционал. И начну с двух самых трудных, на мой взгляд,
  трудностей, с которыми мне пришлось столкнуться. 
  
  ### Первая - рекурсивное открытие свободных от бомб клеток:
  
  ### Второя - при первом нажатии на старте игры на мину или смежную с ней клетку - перенос мины:
  
  ### Третяя - победа. Условие - все флаги правильно покрывают клетки с минами:
  
  
  # Некоторые дополнительные нюансы функционала:
  
  # Удалил :hover при открытом поле
  # 
  #
  
  
  ![hoverClicks](https://user-images.githubusercontent.com/105659797/185966406-d1743a75-ef23-4eae-8b85-6292ea419089.jpg)
