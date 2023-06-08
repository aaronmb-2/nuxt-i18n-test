<template>
	<div class="py-20">The id = {{ id }}</div>
</template>

<script setup lang="ts">
const route = useRoute();

const id = route.params.id;
</script>

<style lang="scss"></style>
