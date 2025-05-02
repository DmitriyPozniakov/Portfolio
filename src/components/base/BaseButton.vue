<template>
  <button
    :class="{
      'white-button': props.backgroundColor === '#fff',
      'dark-button': props.backgroundColor !== '#fff',
    }"
  >
    <slot></slot>
    <svg
      v-if="props.backgroundColor === '#fff'"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <circle cx="14" cy="14" r="14" fill="#242424" />
      <path
        d="M8 13.5C7.72386 13.5 7.5 13.7239 7.5 14C7.5 14.2761 7.72386 14.5 8 14.5V13.5ZM19.3536 14.3536C19.5488 14.1583 19.5488 13.8417 19.3536 13.6464L16.1716 10.4645C15.9763 10.2692 15.6597 10.2692 15.4645 10.4645C15.2692 10.6597 15.2692 10.9763 15.4645 11.1716L18.2929 14L15.4645 16.8284C15.2692 17.0237 15.2692 17.3403 15.4645 17.5355C15.6597 17.7308 15.9763 17.7308 16.1716 17.5355L19.3536 14.3536ZM8 14.5L19 14.5V13.5L8 13.5V14.5Z"
        fill="white"
      />
    </svg>

    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
    >
      <circle cx="18" cy="18" r="18" fill="white" />
      <path
        d="M10.2852 17.3571C9.93012 17.3571 9.6423 17.645 9.6423 18C9.6423 18.355 9.93012 18.6429 10.2852 18.6429V17.3571ZM24.8826 18.4546C25.1336 18.2035 25.1336 17.7965 24.8826 17.5454L20.7915 13.4543C20.5404 13.2033 20.1334 13.2033 19.8823 13.4543C19.6313 13.7054 19.6313 14.1124 19.8823 14.3635L23.5189 18L19.8823 21.6365C19.6313 21.8876 19.6313 22.2946 19.8823 22.5457C20.1334 22.7967 20.5404 22.7967 20.7915 22.5457L24.8826 18.4546ZM10.2852 18.6429L24.428 18.6429V17.3571L10.2852 17.3571V18.6429Z"
        fill="black"
      />
    </svg>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  backgroundColor: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.white-button {
  background-color: #fff;
  color: black;
}

.dark-button {
  background-color: #242424;
  color: white;
}

button {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 10px 16px;
  border-radius: 24px;

  font-family: "Neutral-Medium";
  font-size: 1.6rem;
  color: #0f0f0f;
  transition: background-color 0.3s ease, color 0.3s ease;
}

button:hover {
  background-color: #ff5100;
  color: #fff;
}

button svg {
  transition: transform 0.3s ease;
}

button:hover svg {
  transform: rotate(-30deg);
}
</style>