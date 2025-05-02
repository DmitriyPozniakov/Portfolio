<template>
  <section class="process-section">
    <p class="heading">
      Work <span class="special">process</span><span class="dot">.</span>
    </p>
    <div class="process">
      <div class="step-container">
        <div
          class="text"
          v-for="(item, index) in steps"
          :key="index"
          :ref="el => textRefs[index] = el"
        >
          <div class="step">
            <span :class="{ active: currentStepIndex >= index }">{{ item.number }}</span>
          </div>
          <p class="step-heading" :class="{ active: currentStepIndex >= index }">
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
import { ref, onMounted } from 'vue'

const steps = [
  {
    number: '01',
    heading: 'Project Discussion',
    article: 'We talk through the goals, requirements, and what needs to be built.',
  },
  {
    number: '02',
    heading: 'Reviewing the Design',
    article: 'I check the provided layout (usually Figma or similar) and ask questions if anything’s unclear.',
  },
  {
    number: '03',
    heading: 'Frontend Development',
    article: 'I start coding: responsive layout, animations, logic — clean, scalable, and maintainable code.',
  },
  {
    number: '04',
    heading: 'Testing & Polishing',
    article: 'I test across devices and browsers, refine all details, and make sure everything looks and works perfectly.',
  },
]

const imageList = [
  require('@/assets/images/close.png'),
  require('@/assets/images/circle.png'),
  require('@/assets/images/star.png'),
  require('@/assets/images/atom.png'),
]

const textRefs = []
const currentStepIndex = ref(-1)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = textRefs.indexOf(entry.target)
          if (index > currentStepIndex.value) {
            currentStepIndex.value = index
          }
        }
      })
    },
    {
      root: null,
      threshold: 1,
    }
  )

  textRefs.forEach((el) => {
    if (el) observer.observe(el)
  })
})
</script>

<style scoped lang="scss">
.process-section {
  padding: 40px 80px 80px 80px;
}

.heading {
  color: #fff;
  font-family: "Neutral-Regular";
  font-size: 6.4rem;
  margin-bottom: 120px;

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
</style>
