<template>
  <router-view />
</template>

<script setup>
import {useUserStore} from "stores/user.js";

const userStore = useUserStore();

function getUser() {
  let user = localStorage.getItem('user')
  if (user) {
    userStore.user = JSON.parse(user)
  }
}

getUser()

</script>
