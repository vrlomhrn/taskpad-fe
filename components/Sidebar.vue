<script lang="ts" setup></script>

<template>
  <aside class="aside-container">
    <div class="text-center space-y-1">
      <h1 class="text-2xl font-bold">Taskpad</h1>
      <p class="font-light text-sm">Make your task easier.</p>
    </div>

    <nav class="aside-nav">
      <div class="nav-link active-link">
        <Icon class="active-link__text" name="ri:apps-2-line" size="36" /><NuxtLink
          class="text-xl"
          to="/"
          >Dashboard</NuxtLink
        >
      </div>
      <div class="nav-link">
        <Icon name="ri:briefcase-2-line" size="36" /><NuxtLink
          class="text-xl"
          to="/test"
          >My Projects</NuxtLink
        >
      </div>
      <div class="nav-link">
        <Icon name="ri:list-check-3" size="36" /><NuxtLink
          class="text-xl"
          to="#"
          >My Tasks</NuxtLink
        >
      </div>
      <div class="nav-link">
        <Icon name="ri:settings-4-line" size="36" /><NuxtLink
          class="text-xl"
          to="#"
          >Settings</NuxtLink
        >
      </div>
    </nav>
  </aside>
</template>
