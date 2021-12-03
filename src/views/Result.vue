<template>
  <div class="home">
    <div class="flex justify-between mt-24 mb-3">
      <h1 class="text-2xl font-medium">Results</h1>
      <div
        class="bg-blue-400 flex justify-center items-center rounded px-2 text-white mb-6"
      >
        12 April 2021
      </div>
    </div>
    <div v-if="!loadingResult">
      <div v-if="result.length">
        <div
          v-for="(test, i) in result"
          :key="i"
          class="border rounded p-4 mb-4 text-center"
        >
          <div class="font-bold text-blue-400">
            {{ test.test_name }}
          </div>
          <div class="my-3">
            Your result
            <div class="text-blue-400 text-lg">
              {{ test.result }} {{ test.units }}
            </div>
          </div>
          <div>
            <div>Average peron's range</div>
            <div class="text-blue-400">{{ test.range }}</div>
          </div>
        </div>
      </div>
      <div v-else>No results</div>
    </div>
    <div v-else>
      <div
        v-for="i in [1, 2, 3]"
        :key="i"
        class="border rounded-md p-4 max-w-sm w-full mx-auto mb-4"
      >
        <div class="animate-pulse flex space-x-4">
          <div class="flex-1 space-y-4 py-1">
            <div class="h-3 bg-gray-300 rounded w-2/4 mx-auto"></div>
            <div class="h-3 bg-gray-300 rounded mx-auto"></div>
            <div class="h-3 bg-gray-300 rounded mx-auto"></div>
            <div class="h-3 bg-gray-300 rounded w-4/6 mx-auto"></div>
            <div class="h-3 bg-gray-300 rounded mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Results",
  data() {
    return {
      testId: "T-NL-1005421",
      loadingResult: false,
      result: [],
    };
  },
  mounted() {
    this.loadingResult = true;
    console.log("Making an API call to fetch the result...");
    setTimeout(() => {
      this.result = [
        {
          test_name: "Vitamin D, 25-OH, D3",
          result: "31",
          units: "ng/mL",
          range: "32-100 ng/ml ( 80-250 nmol/L)",
        },
        {
          test_name: "Vitamin D, 25-OH, D2",
          result: "<4",
          units: "ng/mL",
          range: "32-100 ng/ml ( 80-250 nmol/L)",
        },
      ];
      this.loadingResult = false;
      console.log("Result fetched successfully!");
    }, 1500);
  },
};
</script>
