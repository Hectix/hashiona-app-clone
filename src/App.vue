<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div
      id="app"
      class="overflow-hidden relative mx-auto rounded shadow-xl bg-white flex flex-col justify-between"
      style="width: 375px; height: 812px; max-height: 100vh"
    >
      <nav
        class="top-0 w-full relative bg-gradient-to-r from-blue-300 to-green-300"
        role="navigation"
        id="main-nav"
      >
        <img class="absolute bottom-0" src="./assets/wave.svg" alt="Waves" />
        <div class="container mx-auto px-4 py-10">
          <router-link class="pa-4" to="/">
            <img src="./assets/chevron-left.svg" alt="<" />
          </router-link>
        </div>
      </nav>
      <div
        class="container mx-auto px-4 text-sm font-semibold h-4/5 mt-10 overflow-y-auto"
      >
        <router-view />
      </div>
      <div
        class="bottom-0 w-full flex justify-between text-center bg-white border-t text-sm font-semibold cursor-pointer"
      >
        <div
          class="p-2 flex-1"
          :class="{ 'text-blue-500': $route.name.includes('Home') }"
        >
          <router-link to="/">
            <img
              v-if="$route.name.includes('Home')"
              class="mx-auto"
              src="./assets/home-blue.svg"
              alt="home icon"
            />
            <img
              v-else
              class="mx-auto"
              src="./assets/home.svg"
              alt="home icon"
            />
            Home
          </router-link>
        </div>
        <div
          class="p-2 flex-1"
          :class="{ 'text-blue-500': $route.name === 'Result' }"
        >
          <router-link to="/result">
            <img
              v-if="$route.name === 'Result'"
              class="mx-auto"
              src="./assets/check-circle-blue.svg"
              alt="results icon"
            />
            <img
              v-else
              class="mx-auto"
              src="./assets/check-circle.svg"
              alt="results icon"
            />
            Results
          </router-link>
        </div>
        <div class="p-2 flex-1">
          <img
            class="mx-auto"
            src="./assets/bar-chart-2.svg"
            alt="monitor icon"
          />
          Monitor
        </div>
        <div class="p-2 flex-1">
          <img class="mx-auto" src="./assets/book-open.svg" alt="learn icon" />
          Learn
        </div>
        <div class="p-2 flex-1">
          <img class="mx-auto" src="./assets/user.svg" alt="me icon" />
          Me
        </div>
      </div>
    </div>
  </div>
</template>
