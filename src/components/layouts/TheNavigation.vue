<template>
  <nav>
    <p class="logo">Pozniakov<span>.</span></p>
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">Stack</a></li>
      <li><a href="">Portfolio</a></li>
      <li><a href="">Contacts</a></li>
    </ul>
    <base-button class="call-to-action" :backgroundColor="'#fff'">Get in touch</base-button>
    <div class="burger-container">
      <button class="burger">
        <img src="@/assets/images/burger.svg" alt="">
      </button>
    </div>
  </nav>
</template>


<style lang="scss" scoped>
nav,
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  gap: 24px;
}

nav {
  background: #242424;
  padding: 8px 8px 8px 16px;
  border-radius: 32px;
//   max-width: 90%;
//   margin: 0 auto;
}

.burger-container {
  display: none;
}

.logo {
  font-family: "Hikasami";
  color: #fff;
  font-size: clamp(2rem, 2.2vw, 2.6rem);

  text-transform: uppercase;

  span {
    font-family: "Hevena";
    color: #ff5100;
  }
}

ul li a {
  font-family: "Neutral-Regular";
  color: #fff;
  font-size: 1.8rem;
  transition: color 0.3s ease;
}


ul:hover li a {
  color: #7A7F7D;
}

ul li:hover a {
  color: #fff !important;
}

/* Стили для экранов шириной от 320px */
@media (max-width: 320px) {

}

/* Стили для экранов шириной от 480px */
@media (max-width: 480px) {
  ul,
  .call-to-action{
    display: none;
  }
  .burger-container {
    display: block;
  }
}

/* Стили для экранов шириной от 768px (планшеты) */
@media (max-width: 768px) {
  ul,
  .call-to-action{
    display: none;
  }
  .burger-container {
    display: block;
  }
}

/* Стили для экранов шириной от 1024px (десктопы) */
@media (max-width: 1024px) {
  ul,
  .call-to-action{
    display: none;
  }
  .burger-container {
    display: block;
  }
}

/* Стили для экранов шириной от 1440px (очень большие экраны) */
@media (max-width: 1440px) {

}

</style>