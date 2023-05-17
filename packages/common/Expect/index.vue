<template>
  <div class="expectWrap">
    <img :src="expectImg">
  </div>
</template>

<script>
export default {
  name: 'Expect',
  data () {
    return {
      expectImg: require('@/assets/svg/expect.svg')
    }
  }
}
</script>

<style scoped>
.expectWrap{
  width: 100%;
  text-align: center;
  margin-top: 50px;
}
</style>
