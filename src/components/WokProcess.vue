<template>
  <section id="work-process" class="process-section">
    <p class="heading">
      Work <span class="special">process</span><span class="dot">.</span>
    </p>
    <div class="process">
      <div class="step-container">
        <div
          class="text"
          v-for="(item, index) in steps"
          :key="index"
          :ref="(el) => (textRefs[index] = el)"
        >
          <!-- Картинка для мобильного адаптива -->
          <div class="mobile-image">
            <img
              :src="imageList[index]"
              alt=""
              :class="{ visible: currentStepIndex >= index }"
            />
          </div>

          <div class="step">
            <span :class="{ active: currentStepIndex >= index }">{{
              item.number
            }}</span>
          </div>
          <p
            class="step-heading"
            :class="{ active: currentStepIndex >= index }"
          >
            {{ item.heading }}
          </p>
          <p class="step-article">{{ item.article }}</p>
        </div>
      </div>

      <div class="separator">
        <img src="@/assets/images/separator.svg" alt="" />
      </div>

      <div class="images">
        <img
          v-for="(img, index) in imageList"
          :key="index"
          :src="img"
          alt=""
          :class="{ visible: currentStepIndex >= index }"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const steps = [
  {
    number: "01",
    heading: "Project Discussion",
    article:
      "We talk through the goals, requirements, and what needs to be built.",
  },
  {
    number: "02",
    heading: "Reviewing the Design",
    article:
      "I check the provided layout (usually Figma or similar) and ask questions if anything`s unclear.",
  },
  {
    number: "03",
    heading: "Frontend Development",
    article:
      "I start coding: responsive layout, animations, logic — clean, scalable, and maintainable code.",
  },
  {
    number: "04",
    heading: "Testing & Polishing",
    article:
      "I test across devices and browsers, refine all details, and make sure everything looks and works perfectly.",
  },
];

const imageList = [
  require("@/assets/images/close.png"),
  require("@/assets/images/circle.png"),
  require("@/assets/images/star.png"),
  require("@/assets/images/atom.png"),
];

const textRefs = [];
const currentStepIndex = ref(-1);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = textRefs.indexOf(entry.target);
          if (index > currentStepIndex.value) {
            currentStepIndex.value = index;
          }
        }
      });
    },
    {
      root: null,
      threshold: 1,
    }
  );

  textRefs.forEach((el) => {
    if (el) observer.observe(el);
  });
});
</script>

<style scoped lang="scss">
.process-section {
  padding: 40px 80px 80px 80px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -300px;
    right: -100px;
    width: 850px;
    height: 850px;
    background-image: url("@/assets/images/light.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
}

.heading {
  color: #fff;
  font-family: "Neutral-Regular";
  font-size: clamp(5.5rem, 6vw, 6.4rem);
  margin: 60px 0 120px 0;

  .special {
    font-family: "Instrumental";
    font-style: italic;
  }

  .dot {
    color: #ff5100;
  }
}

.process {
  display: flex;
  justify-content: space-between;
}

.step-container,
.images {
  display: flex;
  flex-direction: column;
  gap: 160px;
}

.separator {
  margin-top: 130px;
}

.step {
  height: 80px;
  width: 80px;
  padding: 2px;
  border-radius: 12px;
  background: #151515;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  span {
    color: #fff;
    font-family: "Instrumental";
    font-size: 5.2rem;
    font-style: italic;
    opacity: 0.3;
    transition: color 0.3s, opacity 0.3s;
  }

  span.active {
    color: #ff5100;
    opacity: 1;
  }
}

.step-heading {
  color: #a7a7a7;
  font-family: "Neutral-Medium";
  font-size: 2.6rem;
  margin-bottom: 15px;
  transition: color 0.3s;
}

.step-heading.active {
  color: #fff;
}

.step-article {
  color: #a7a7a7;
  font-family: "Neutral-Regular";
  font-size: 2rem;
  max-width: 37rem;
}

.images img {
  width: 100%;
  max-height: 23rem;
  height: auto;
  display: block;
  object-fit: contain;
  opacity: 0.3;
  transition: opacity 0.5s ease;
}

.images img.visible {
  opacity: 1;
}

/* Мобильные изображения скрыты по умолчанию */
.mobile-image {
  display: none;
}

/* Стили для экранов шириной от 320px */
@media (max-width: 320px) {
  .step-container {
    gap: 80px;
  }
}

/* Стили для экранов шириной от 480px */
@media (max-width: 480px) {
  .process-section {
    padding: 20px !important;
  }

  .step-container {
    gap: 100px;
  }
}

/* Стили для экранов шириной от 768px (планшеты) */
@media (max-width: 768px) {
  .process-section {
    padding: 40px !important;
  }

  .step-container {
    gap: 120px;
  }
  .process-section {
   

    &::before {
      top: -100px;
    }
  }
}

/* Стили для экранов шириной от 1024px (десктопы) */
@media (max-width: 1024px) {
  .process-section {
    padding: 40px 80px 120px 80px;
  }
  .process {
    flex-direction: column;
  }
  .separator {
    display: none;
  }

  .mobile-image {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 30px;

    img {
      width: 150px;
      height: 150px;
      object-fit: contain;
      opacity: 0.3;
      transition: opacity 0.5s ease;
    }

    img.visible {
      opacity: 1;
    }
  }

  /* Скрываем десктопные изображения */
  .images {
    display: none;
  }
}

/* Стили для экранов шириной от 1440px (очень большие экраны) */
@media (max-width: 1440px) {
}
</style>