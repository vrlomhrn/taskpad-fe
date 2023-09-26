<script setup lang="ts">
  const active: Ref<boolean> = ref(true);

  function toggleActive(): void {
    active.value = !active.value;
  }
</script>

<template>
  <section id="header-field-section" class="main-header-container">
    <div class="main-header-container__search-field">
      <Icon name="ri:search-line" />
      <input
        class="focus:outline-none"
        id="search-content"
        type="text"
        placeholder="Search"
      />
    </div>
    <div class="main-header-container__profile-field">
      <button type="button" @click="toggleActive">
        <div class="avatar-user">DM</div>
      </button>
      <Transition :duration="90">
        <div
          id="dropdown"
          v-if="!active"
          :class="{
            'bg-white rounded-lg shadow w-44 -right-1 top-12 border border-black border-opacity-25 absolute': true,
            hidden: active,
          }"
        >
          <ul class="py-2 text-sm text-black">
            <li>
              <NuxtLink
                to="#"
                class="font-medium flex items-center gap-2 px-4 py-2 hover:text-primary hover:bg-primary hover:bg-opacity-40"
                ><Icon name="ri:user-3-line" />Profile</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="#"
                class="font-medium flex items-center gap-2 px-4 py-2 hover:text-primary hover:bg-primary hover:bg-opacity-40"
                ><Icon name="ri:settings-3-line" />Settings</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="#"
                class="font-medium flex items-center gap-2 px-4 py-2 hover:text-primary hover:bg-primary hover:bg-opacity-40"
                ><Icon name="ri:logout-circle-r-line" />Sign out</NuxtLink
              >
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
  /* we will explain what these classes do next! */
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
