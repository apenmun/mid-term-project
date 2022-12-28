<template> <h2>{{message}}</h2> 
<input type="email" ref="email">
</template>

<script setup>
import { ref } from "vue";

const message = ref("Mundo");

const email = ref("write your email");

</script>

<style></style>
