<template>
  <footer>
    <div class="wrapper">
      <div class="left">
        <img class="earth" src="@/assets/images/earth.png" alt="" />
        <p class="email">pozniakov.dmytroo@gmail.com</p>
        <p class="number">+380 98 518 6433</p>
        <div class="buttons">
          <button class="touch">Keep in touch</button>
          <button class="social-media">
            <img src="@/assets/images/github.svg" alt="" />
          </button>
          <button class="social-media">
            <img src="@/assets/images/linkedin.svg" alt="" />
          </button>
          <button class="social-media">
            <img src="@/assets/images/telegram.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="right">
        <p class="heading">Your design deserves better —</p>
        <p class="heading-cont">
          <span class="special">let’s code</span> it right<span class="dot"
            >.</span
          >
        </p>
      </div>
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
    button {
      background-color: #fff;
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
  flex-grow: 1;
  background: #fff;
  padding: 30px;
  border-radius: 40px;

  .heading {
    color: #000;
    font-family: "Neutral-Regular";
    font-size: 6.4rem;
    line-height: 120%;
  }

  .heading-cont {
    color: #000;
    font-size: 6.4rem;
    text-align: center;
    font-family: "Neutral-Regular";

    .special {
      font-family: "Instrumental";
    }
  }
}
</style>