<template>
  <aside class="aside-container">
    <div class="aside-logo">
      <h1 class="aside-logo_header">Taskpad</h1>
      <p class="aside-logo_slogan">Make your task easier.</p>
    </div>

    <nav class="aside-nav">
      <NuxtLink class="nav-link" active-class="active-link" to="/">
        <Icon name="ri:apps-2-line" size="24" />
        <span class="nav-link__text">Dashboard</span>
      </NuxtLink>
      <NuxtLink class="nav-link" active-class="active-link" to="/test">
        <Icon name="ri:briefcase-2-line" size="24" />
        <span class="nav-link__text">My Projects</span>
      </NuxtLink>
      <NuxtLink class="nav-link" active-class="active-link" to="/tasks">
        <Icon name="ri:list-check-3" size="24" />
        <span class="nav-link__text">My Tasks</span>
      </NuxtLink>
      <NuxtLink class="nav-link" active-class="active-link" to="/settings">
        <Icon name="ri:settings-4-line" size="24" />
        <span class="nav-link__text">Settings</span>
      </NuxtLink>
    </nav>
  </aside>
</template>
