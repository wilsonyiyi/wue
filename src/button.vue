<template>
  <div>
    <button class="g-button">按钮</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="scss">
.g-button {
  margin: 20px;
  padding: 0 1em;
  height: var(--button-height);
  color: var(--color);
  font-size: var(--font-size);
  background-color: var(--button-bg);
  border-radius: var(--border-radius);
  border-color: var(--border-color);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>