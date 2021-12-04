<template>
  <div class="home">
    <div class="mb-10 flex">
      <img
        src="../assets/clock.svg"
        alt="Clock icon"
        width="14px"
        class="mr-1"
      />
      Today
    </div>
    <h1 class="text-2xl font-medium mb-3">Hello Eva</h1>
    <div class="border rounded p-4">
      <div class="flex gap-2">
        <div class="flex-shrink flex-grow w-2/3">
          Get tested today to get some interesting and insightful information.
        </div>
        <div class="flex-shrink flex-grow w-1/3">
          <img src="../assets/take-test.svg" alt="Get tested illustration" />
        </div>
      </div>
      <router-link
        tag="button"
        class="button w-full mt-4"
        to="/waiting-for-result"
      >
        Get tested
      </router-link>
    </div>
    <div class="mt-4">
      <div class="border rounded p-4 flex items-center mb-4 cursor-pointer">
        <img src="../assets/love.png" alt="Image" class="mr-3" />
        <span>Your Basal Metabolic rate is 800kal</span>
        <img src="../assets/chevron-right-blue.svg" alt=">" class="ml-auto" />
      </div>
      <div class="border rounded p-4 flex items-center mb-4 cursor-pointer">
        <img src="../assets/period-calendar.png" alt="Image" class="mr-3" />
        <span>Your Next period is due in 14 days</span>
        <img src="../assets/chevron-right-blue.svg" alt=">" class="ml-auto" />
      </div>
      <div class="border rounded p-4 flex items-center mb-4 cursor-pointer">
        <img src="../assets/medical-appointment.png" alt="Image" class="mr-3" />
        <span>Your next doctor appointment in on 23rd May</span>
        <img src="../assets/chevron-right-blue.svg" alt=">" class="ml-auto" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
