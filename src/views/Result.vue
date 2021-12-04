<template>
  <div class="home">
    <div class="flex justify-between mb-5 items-center">
      <h1 class="text-2xl font-medium">Results</h1>
      <div
        class="bg-blue-400 flex justify-center items-center rounded px-2 text-white mt-0.5"
      >
        {{ today.getDate() }} {{ monthNames[today.getMonth()] }}
        {{ today.getFullYear() }}
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
          <div
            class="w-full h-5 mt-10 rounded relative"
            :style="
              getResultBarBackgroundGradient(
                0,
                test.optimal_max * 2,
                test.optimal_min,
                test.optimal_max
              )
            "
          >
            <div
              class="absolute bottom-0"
              :style="{
                left:
                  getValuePercentageInRange(
                    test.result,
                    0,
                    test.optimal_max * 2
                  ) + '%',
              }"
            >
              <div class="font-bold absolute -top-0.5 left-2">
                {{ test.result }}
              </div>
              <div class="h-10 w-1 bg-black mx-auto"></div>
            </div>
          </div>
          <div class="flex justify-between mt-1">
            <span>0 {{ test.units }}</span>
            <span>{{ test.optimal_max * 2 }} {{ test.units }}</span>
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
      today: new Date(),
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  methods: {
    getValuePercentageInRange(value, min, max) {
      const percentage = ((value - min) / (max - min)) * 100;

      if (percentage <= 0) {
        return 0;
      }

      return percentage;
    },
    getResultBarBackgroundGradient(min, max, optimumMin, optimumMax) {
      const yellowStart = this.getValuePercentageInRange(optimumMin, min, max);
      const yellowEnd = this.getValuePercentageInRange(optimumMax, min, max);
      return {
        backgroundImage:
          "linear-gradient(to right, red, yellow " +
          yellowStart +
          "%" +
          ", lime, yellow " +
          yellowEnd +
          "%" +
          ", red)",
      };
    },
  },
  mounted() {
    this.loadingResult = true;
    fetch(
      "https://api.test.chino.io/v1/schemas/e981fecd-e947-4b5d-9c73-adedb0cdfe55/documents?full_document=true",
      {
        headers: {
          Authorization:
            "Basic MzlkNTVkNmUtMTJjYi00N2IyLWE3ZjctYWIxMmFiZWQyMGViOmU0MGY1OWU2LWIxNDMtNDEwOS05MzQzLWM5NzkyN2M0MmVlMw==",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        this.result = res.data.documents.map((document) => document.content);
      })
      .finally(() => {
        this.loadingResult = false;
      });
  },
};
</script>
