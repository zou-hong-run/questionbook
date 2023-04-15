<template>

  <router-view v-slot="{ Component }">
    <transition name="slide-fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- <transition name="slide-fade">
    <router-view />
  </transition> -->
</template>
<style lang="scss">
.slide-fade {
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
}

.slide-fade-enter,
.slide-fade-leave-to {
  left: 0;
  top: 0;
  right: 0;
  position: absolute;
  transform: translateY(0);
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all  0.6s  ease-in;
}

.slide-fade-leave-active {
  transition: all 0.6s ease-in;
  transform: translateY(-100%);
  opacity: 1;
  z-index: 100;
}
</style>