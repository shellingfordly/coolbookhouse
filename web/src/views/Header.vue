<template>
  <div class="header">
    Cool Book House
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
@import '../style/color';

.header {
  width: 100%;
  padding: 20px;
  background: $--color-primary;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

</style>
