<script lang="ts" setup></script>

<template>
  <div class="base-layout">
    <Sidebar />
    <main
      class="flex flex-col justify-center items-start gap-[40px] self-stretch"
    >
      <slot />
    </main>
  </div>
</template>

<style scoped></style>
