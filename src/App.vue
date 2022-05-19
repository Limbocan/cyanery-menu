<template>
  <PageVue />
</template>

<script setup lang="ts">
import PageVue from './views/Index.vue'
</script>

<style>
html {
  box-sizing: border-box;
}
*:not(input) {
  border: 0;
  margin: 0;
  padding: 0;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
*[hide] {
  display: none;
}
*[disabled] {
  opacity: .5;
  pointer-events: none;
}
:root {
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}
h1 {
  font-family: var(--font-family);
  font-size: 2.2rem;
}
h1::before {
  content: '#';
  margin-right: 4px;
  visibility: hidden;
  cursor: pointer;
}
h1:hover::before {
  color: cornflowerblue;
  visibility: visible;
  cursor: pointer;
}
</style>
