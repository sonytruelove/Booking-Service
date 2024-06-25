<template>
  <div>
    {{ test }}
  </div>
</template>

<script>
import { test } from '@/api/test.js'
export default {
  name: 'IndexPage',
  data() {
    return {
      test: '',
    }
  },
  created() {
    test().then((res) => (this.test = res))
  },
}
</script>
