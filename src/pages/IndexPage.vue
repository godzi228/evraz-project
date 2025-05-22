<template>
  <q-card
    class="my-card text-white"
    style="background: #80daeb"
  >
    <q-card-section>
      <div class="text-h6">Вход</div>
    </q-card-section>
    <q-input class="phNum" standout="bg-teal text-white" v-model="phoneNum1" mask="+7 (###) ###-##-##"  label="Номер телефона"/>
    <q-input class="phNum" standout="bg-teal text-white" v-model="password1"  label="Пароль" />
    <q-btn class="join" color="black" label="Войти" @click="ConfirmLogin"/>

  </q-card>
</template>

<script setup>
import {ref} from 'vue'

let phoneNumbers = [{
  phone: '+7 (912) 247-41-01',
  name: 'Елисей',
  password: 'Елисей'
  },
  {
    phone: '+7 (922) 227-20-10',
    name: 'Михаил',
    password: 'Михаил'
  },
  {
    phone: '+7 (912) 345-67-89',
    name: 'Артем',
    password: 'Артем'
  }
]

let phoneNum1 = ref('')
let password1 = ref('')
function ConfirmLogin() {
  for (let phoneNumber of phoneNumbers) {
    if (phoneNum1.value === phoneNumber.phone && password1.value === phoneNumber.password) {
      window.location.href = '/#/information'
      return
    }
  }
  alert('Такого номера телефона нет, на нашей базе данных или пароль неправильный')
}

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
