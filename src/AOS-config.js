
const aosConfig = {
  // Глобальная продолжительность анимации (в мс)
  duration: 800,

  // Задержка перед началом (в мс)
  delay: 100,

  // Временная функция (easing)
  easing: 'ease-in-out',

  // Повторять анимацию при повторной прокрутке
  once: false,

  // Анимация запускается только при прокрутке вниз
  mirror: false,

  // Сколько процентов должно быть видно, чтобы запустить анимацию
  offset: 120,

  // Указывает, должна ли анимация запускаться при прокрутке (true) или сразу (false)
  disable: false, // можно также: 'phone', 'tablet', 'mobile'

  // Запускается при событии `DOMContentLoaded`
  startEvent: 'DOMContentLoaded',
}

export default aosConfig
