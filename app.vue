
<!-- import PrimaryButton from './components/PrimaryButton.vue'; -->
<template>
  <div class="navbar">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
  </div>
  <div style="display: flex; gap: 8px; align-items: center; justify-content: center;">
    <PrimaryButton />
    <SecondaryButton />
  </div>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<style lang="sass" scoped>
.navbar 
  display: flex
  justify-content: space-between
  padding: $large-padding
  border-bottom: 2px solid $back-color

  a
    text-decoration: none
    color: $back-color
    font-weight: bold
    padding: $small-padding $large-padding

    &:hover
      color: $blue-color
</style>
