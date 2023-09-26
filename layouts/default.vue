<script lang="ts" setup></script>

<template>
  <div class="base-layout">
    <Sidebar />
    <main
      class="flex flex-col justify-center items-start gap-[40px] self-stretch"
    >
      <div class="h-full overflow-hidden">
        <TheHeader />
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped></style>
