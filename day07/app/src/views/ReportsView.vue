<template>
	<div class='ReportsView'>ReportsView</div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
 import { useRouter, useRoute } from 'vue-router';
const store = useStore();
const router = useRouter();
const route = useRoute();
const data = reactive({});
</script>

<style lang='scss' scoped>

</style>
