<template>
  <div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
div {
  position: absolute;
 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  background: #232323;
  padding: 12px 32px;

  color: #e96122;
  font-family: "Neutral-Medium";
  font-size: 2rem;

  z-index: 1000;
  transition: transform 0.3s ease;

   // Добавим адаптивные стили:
   @media (max-width: 768px) {
    padding: 8px 24px;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 6px 16px;
    font-size: 1.2rem;
  }
  
}

div:hover {
  transform: translateY(-8px);
}


</style>

