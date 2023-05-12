<template>
  <dv-border-box-8
    :dur="0"
    style="width:100px;height: 75px;"
    :color="['#83bff6', '#00CED1']"
    backgroundColor="transparent"
  />
</template>

<script>
import DvBorderBox8 from "@jiaminghi/data-view/lib/components/borderBox8/src/main.vue";
export default {
  name: "BorderBox8",
  components: {
    DvBorderBox8
  },
  data() {
    return {};
  }
};
</script>
