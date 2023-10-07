<template>
  <div class="bg-white w-[49%] px-4 py-4 rounded-[20px]">
    <div class="flex items-center justify-between space-x-4">
      <div class="flex space-x-4">
        <img
          class="w-[50px] h-[50px] self-center object-cover"
          src="https://source.unsplash.com/200x200?art"
        />
        <div class="space-y-2">
          <h3 class="font-semibold">Lorem Ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus, assumenda.
          </p>
        </div>
      </div>
      <div class="w-8 h-8 text-center">
        <Icon name="bi:three-dots-vertical" class="cursor-pointer" size="24" />
      </div>
    </div>

    <div class="mt-4">
      <div class="flex justify-between items-center">
        <!-- <button class="bg-skyblue text-sm py-2 px-2 rounded text-white">
          Select Progress
        </button> -->
        <select
          class="bg-skyblue text-white py-2 px-2 rounded cursor-pointer"
          name="progress"
          id="progress"
        >
          <option class="bg-success" value="completed">Complete</option>
          <option value="ongoing">On Progress</option>
        </select>
        <div
          class="border border-alert py-2 px-2 rounded cursor-pointer text-alert hover:bg-alert hover:bg-opacity hover:text-white hover:border-dotted hover:border-white"
        >
          High Priority
        </div>
      </div>

      <div class="mt-4 space-y-4">
        <p>Task Done: <span>2/20</span></p>
        <progress class="w-full" id="progress-task" value="2" max="20"></progress>
      </div>
    </div>
  </div>
</template>
