<script setup lang="ts">
  defineProps({
    image: String
  });
</script>

<template>
  <div class="avatar rounded-full overflow-hidden">
    <img :src="image" alt="avatar" width="32" height="32" />
  </div>
</template>

<style lang="scss">
.avatar {
  width: 32px;
  height: 32px;
}
</style>