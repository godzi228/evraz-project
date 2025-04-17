<template>
  <q-card
    class="my-card text-white"
    style="background: #80daeb"
  >
    <q-card-section>
      <div class="text-h6">Вход</div>
    </q-card-section>

    <q-input class="phNum" standout="bg-teal text-white" v-model="text" mask="+7 (###) ###-##-##" label="Номер телефона" />
    <q-input class="phNum" standout="bg-teal text-white" v-model="text"  label="Пароль" />
    <q-btn class="join" color="black" label="Войти" href="/#/information" />

  </q-card>
</template>

<script setup>


items
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 600px
  height: 400px
  margin: 200px auto

.text-h6
  color: #000000
  margin-left: 228px
  margin-top: 39px
  font-size: 43px

.phNum
  width: 67ch
  margin: 30px auto
  background: #80daeb

.join
  width: 66ch
  height: 60px
  margin-left: 36px
</style>
