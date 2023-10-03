<script lang="ts" setup></script>

<template>
  <div class="base-layout">
    <Sidebar />
    <main class="main-container">
      <TheHeader />
      <slot />
    </main>
  </div>
</template>