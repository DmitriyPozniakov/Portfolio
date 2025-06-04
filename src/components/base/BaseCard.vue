<template>
  <a :href="url" target="_blank" class="card" data-aos="fade-up">
    <img :src="imgSrc" alt="" />
    <div class="container">
      <slot name="heading" class="heading"></slot>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <circle cx="24" cy="24" r="24" fill="white" />
        <path
          d="M14.4766 27.8483C13.9983 28.1244 13.8344 28.736 14.1105 29.2143C14.3867 29.6926 14.9983 29.8564 15.4766 29.5803L14.4766 27.8483ZM32.2733 19.5445C32.4162 19.0111 32.0996 18.4627 31.5661 18.3198L22.8728 15.9904C22.3393 15.8475 21.791 16.1641 21.6481 16.6975C21.5051 17.231 21.8217 17.7793 22.3552 17.9223L30.0826 19.9928L28.012 27.7202C27.8691 28.2537 28.1857 28.802 28.7191 28.945C29.2526 29.0879 29.8009 28.7713 29.9439 28.2379L32.2733 19.5445ZM15.4766 29.5803L31.8073 20.1517L30.8073 18.4197L14.4766 27.8483L15.4766 29.5803Z"
          fill="#363636"
        />
      </svg>
    </div>
    <p class="stack">
      <span>Stack: </span>
      <slot name="stack"></slot>
    </p>
  </a>
</template>


<script setup>
import { defineProps } from "vue";

defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  imgSrc2: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.card {
  padding: 30px 40px;
  border-radius: 48px;
  background: #1e1e1e;
  // height: 64rem;
  height: auto;
  width: clamp(32rem, 50vw, 64rem);
  flex-shrink: 0;
  min-width: 32rem;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #333333;
    transform: scale(1.02);
  }

  img {
    max-width: 100%;
    height: 420px;
    object-fit: cover;
    display: block;
    margin-bottom: 25px;
    border-radius: 30px;
  }

  ::v-deep(.heading) {
    color: #fff;
    font-family: "Neutral-Regular";
    font-size: clamp(2.8rem, 2vw + 1rem, 4.8rem);
  }

  .stack {
    color: #6e6e6e;
    font-family: "Neutral-Regular";
    font-size: clamp(1.4rem, 2vw + 1rem, 2.4rem);

    span {
      color: #fff;
    }
  }
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  svg {
    width: 32px;
    height: 32px;
  }

  .card {
    padding: 20px;
    width: 100% !important;
  }
}
</style>