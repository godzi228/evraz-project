<script setup>

import { ref, computed } from 'vue'
import { useCartStore } from 'src/stores/cart.js'
import {useUserStore} from 'src/stores/user.js'
const cartStore = useCartStore()
const UserInfo = useUserStore()

let phone1 = ref('https://ekt-basket-cdn-01.geobasket.ru/vol1710/part171042/171042725/images/c246x328/1.webp')

let hasInCart = computed(() => {
  for (let cartItem of cartStore.cartItems) {
    if (cartItem.name === 'Смартфон iPhone 14 Pro') {
      return true
    }
  }
  return false
})



let phone = ref('https://ekt-basket-cdn-01.geobasket.ru/vol1710/part171042/171042725/images/c246x328/1.webp')
</script>

<template>
  <div class="container1">
    <q-card class="my-card">
      <q-card-section>
        <q-badge rounded color="red" :label='cartStore.getIcon' :class="{'label1': cartStore.getIcon === 0, 'label2': cartStore.getIcon >= 1}"/>
        <router-link :to="{ path: '/information' }"><q-img class="image" src="https://avatars.mds.yandex.net/i?id=d8e3bb911c948ede43e0b259fa4ba5e2811516ff-12473946-images-thumbs&n=13"></q-img></router-link>
        <q-img class="image3" src="https://sun9-29.userapi.com/s/v1/ig2/jR0TieOaHjnQ-Vstw6psyVlF-vL4kxZR3nKZv3-zegtmwQ7_HUIO462wggJ_-4m6BfD0N3JxYxCU_b9LMmQ4LXkJ.jpg?size=400x400&quality=96&crop=120,54,960,960&ava=1"></q-img>
        <router-link :to="{ path: '/information/korzina' }"><q-img class="image4" src="https://static.tildacdn.com/tild6137-6234-4630-b935-383532613533/grocery-store.png"></q-img></router-link>
        <div class="login">{{ UserInfo.getUserName }}</div>
        <div class="basket">Корзина</div>
      </q-card-section>
    </q-card>
  </div>
  <div class="container">
    <q-card class="main-card">
      <q-card-section>
        <div class="football1">
          <q-img class="image2"  :src="phone"></q-img>
          <q-img class="image5" src="https://ekt-basket-cdn-01.geobasket.ru/vol1710/part171042/171042725/images/c246x328/2.webp" @click="phone = 'https://ekt-basket-cdn-01.geobasket.ru/vol1710/part171042/171042725/images/c246x328/2.webp'"></q-img>
          <q-img class="image6"  src="https://ekt-basket-cdn-01.geobasket.ru/vol1710/part171042/171042725/images/c246x328/1.webp" @click="phone = 'https://ekt-basket-cdn-01.geobasket.ru/vol1710/part171042/171042725/images/c246x328/1.webp'"></q-img>
          <div class="football">Смартфон iPhone 14 Pro 256 ГБ Dual SIM тёмно-фиолетовый</div>
          <div class="opis">Телефон iPhone 14 Pro 256 ГБ с батареей, которая обеспечит до 23 часов беспрерывного просмотра видео.</div>
          <div class="footballprice">100 500 ₽</div>
          <q-btn
            :class="{'join-active': hasInCart === true, 'join': hasInCart === false}"

            @click="cartStore.addCartItem({
          image: phone1,
          name: 'Смартфон iPhone 14 Pro',
          price: 100_500,
        })">Добавить в корзину</q-btn>
        </div>
      </q-card-section>
    </q-card>
  </div>
  <div class="container2">
    <q-card class="shopinf" style="background: black">
      <q-card-section>
        <footer class="info" style="color: white">© 2025 Железная логика. Все права защищены. ОГРН 1196658005851</footer>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped lang="sass">
.label2
  margin-left: 94%
.label1
  margin-left: 94%
  visibility: hidden

.container1
  display: flex
  justify-content: center

.my-card
  width: 88%
  border-radius: 30px

.image
  margin-top: -1.5%
  width: 5%
  border-radius: 15px

.container
  display: flex
  justify-content: center

.main-card
  width: 88%
  height: 500px
  margin-top: 5%
  border-radius: 30px


.image2
  width: 22%
  margin-left: 9%
  border-radius: 15px

.footballprice
  font-size: 35px
  font-weight: bold
  margin-top: 2%
  margin-left: 34%

.football
  font-size: 48px
  margin-left: 33%
  margin-top: -28%

.opis
  font-size: 24px
  margin-left: 33.5%
  margin-top: 2%

.image3
  margin-left: 82.3%
  margin-top: -2%
  width: 2%

.login
  margin-left: 87%
  margin-top: -3%
  font-weight: bold

.image4
  margin-left: 91.6%
  margin-top: -6.5%
  width: 2%

.basket
  margin-left: 91%
  margin-top: -1.3%
  font-weight: bold

.shopinf
  width: 100%
  height: 100px
  margin-top: 8.6%

.info
  font-size: 20px
  padding-left: 10%
  padding-top: 1%

.join
  margin-left: 34%
  margin-top: 2%
  width: 23%
  height: 60px
  border-radius: 10px
  background-color: black
  color: white

.join-active
  margin-left: 34%
  margin-top: 2%
  width: 23%
  height: 60px
  border-radius: 10px
  background-color: green

.image5
  width: 5%
  margin-left: -30%
  margin-top: -2%
  border-radius: 15px

.image6
  width: 5%
  margin-left: -5%
  margin-top: -20%
  border-radius: 15px
</style>
