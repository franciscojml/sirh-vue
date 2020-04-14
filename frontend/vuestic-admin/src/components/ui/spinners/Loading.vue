<template>
  <div class="spinners">
    <div class="text--center pb-4">
      <div class="flex-center spinner-box">
        <component :animation-duration="speed" :is="SpringSpinner" :color="spinnersColor"></component>
      </div>
    </div>
  </div>
</template>

<script>
import * as spinners from "epic-spinners";
import { mapGetters } from "vuex";

export default {
  name: "Loading",
  components: {
    ...spinners
  },
  data() {
    return {
      spinnersColor: this.$themes.primary,
      currentDuration: 1500,
      sliderDuration: {
        min: 1000,
        max: 2000
      },
      SpringSpinner: "SpringSpinner"
    };
  },
  computed: {
    ...mapGetters(["palette"]),
    speed() {
      return (
        this.sliderDuration.min + this.sliderDuration.max - this.currentDuration
      );
    }
  }
};
</script>

<style lang="scss">
.spinners {
  &__size {
    &-smaller,
    &-bigger {
      width: 40px;
      text-align: center;
      font-weight: 600;
    }

    &-smaller {
      font-size: 1rem;
    }

    &-bigger {
      font-size: 1.3rem;
    }
  }

  &__duration {
    &-slower,
    &-faster {
      transform: translateY(-1px);
    }
  }

  .spinner-box {
    height: 50px;
    vertical-align: center;
  }
}
</style>
