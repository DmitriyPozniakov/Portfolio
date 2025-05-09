<template>
  <footer id="footer">
    <div class="wrapper">
      <div class="left">
        <img class="earth" src="@/assets/images/earth.png" alt="" />
        <p class="email">pozniakov.dmytroo@gmail.com</p>
        <p class="number">+380 98 518 6433</p>
        <div class="buttons">
          <a
            href="https://mail.google.com/mail/?view=cm&to=pozniakov.dmytroo@gmail.com"
            target="_blank"
            rel="noopener"
          >
            <button class="touch">Keep in touch</button>
          </a>

          <a
            href="https://github.com/DmitriyPozniakov"
            target="_blank"
            rel="noopener"
          >
            <button class="social-media">
              <img src="@/assets/images/github.svg" alt="GitHub" />
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/pozniakov-dmytro/"
            target="_blank"
            rel="noopener"
          >
            <button class="social-media">
              <img src="@/assets/images/linkedin.svg" alt="LinkedIn" />
            </button>
          </a>

          <a href="https://t.me/dima_mp5" target="_blank" rel="noopener">
            <button class="social-media">
              <img src="@/assets/images/telegram.svg" alt="Telegram" />
            </button>
          </a>
        </div>
      </div>
      <div class="right">
        <p class="heading">Your design deserves better —</p>
        <p class="heading-cont">
          <span class="special">let’s code</span> it right<span class="dot"
            >.</span
          >
        </p>
        <base-button :nonHover="true" class="base-button"
          >Download my CV</base-button
        >
      </div>
    </div>
    <div class="copyright">
      <p>Copyrights © 2025</p>
      <p>
        Designed by
        <span
          ><a target="_blank" href="https://www.behance.net/1c456b56"
            >Anastasiia Bryzha</a
          ></span
        >
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: #0f0f0f;
  padding: 40px 80px 80px 80px;
}

.wrapper {
  display: flex;
  gap: 25px;
  margin-bottom: 30px;
}

.left {
  flex-grow: 1;
  max-width: 50rem;
  border-radius: 32px;
  background: #242424;
  padding: 25px 30px;

  .earth {
    max-height: 15rem;
    height: auto;
    object-fit: contain;
    margin-bottom: 170px;
  }

  .email {
    margin-bottom: 20px;
  }

  .number {
    margin-bottom: 50px;
  }

  p {
    color: #fff;
    font-size: 1.6rem;
    font-family: "Neutral-Regular";
  }

  .buttons {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    button {
      background-color: #fff;
      flex-shrink: 0;
    }

    .touch {
      padding: 20px 32px;
      border-radius: 32px;
      font-size: 1.6rem;
      color: #0f0f0f;
      font-family: "Neutral-Regular";
    }

    .social-media {
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      width: 60px;

      img {
        height: 30px;
        width: 30px;
      }
    }
  }
}

.right {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  background: #fff;
  padding: 30px;
  border-radius: 40px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out; // Плавное изменение фона и цвета

  &:has(.base-button:hover) {
    background: #ff5100;
    color: #fff;
  }

  &:has(.base-button:hover) .dot {
    color: #0f0f0f !important;
  }

  .heading {
    color: inherit;
    font-family: "Neutral-Regular";
    font-size: 6.4rem;
    line-height: 120%;
  }

  .heading-cont {
    color: inherit;
    font-size: 6.4rem;
    font-family: "Neutral-Regular";
    margin: 0 auto;

    .special {
      font-family: "Instrumental";
    }

    .dot {
      color: #ff5100;
      transition: color 0.3s ease-in-out;
    }
  }
}

.base-button {
  margin-top: auto;
}

.copyright {
  display: flex;
  justify-content: space-between;
  margin: 0 60px;

  p {
    color: #fff;
    font-family: "Neutral-Regular";
    font-size: 1.4rem;
    font-weight: 400;

    span {
      color: #ff5100;
    }
  }
}
</style>