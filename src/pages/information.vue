<script setup>
import { ref, computed } from 'vue'
import {useCartStore} from 'src/stores/cart.js'
import {useUserStore} from "stores/user.js";
const cartStore = useCartStore()
const UserInfo = useUserStore()

let tshirt = ref('https://ir-8.ozone.ru/s3/multimedia-1-6/wc1000/7197436050.jpg')

let tshirt1 = ref('https://ir-8.ozone.ru/s3/multimedia-1-6/wc1000/7197436050.jpg')




let hasInCart = computed(() => {
  for (let cartItem of cartStore.cartItems) {
    if (cartItem.name === 'Футболка с Хайзенбергом') {
      return true
    }
  }
  return false
})

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
        <q-img class="image5" src="https://ir-8.ozone.ru/s3/multimedia-1-5/wc1000/7197436049.jpg" @click="tshirt = 'https://ir-8.ozone.ru/s3/multimedia-1-5/wc1000/7197436049.jpg'"></q-img>
        <q-img class="image2" src="https://ir-8.ozone.ru/s3/multimedia-1-6/wc1000/7197436050.jpg" @click="tshirt = 'https://ir-8.ozone.ru/s3/multimedia-1-6/wc1000/7197436050.jpg'"></q-img>
        <div class="t-shirt1">
          <q-img class="image1" :src="tshirt"></q-img>
        </div>
        <div class="t-shirtheis">
          Футболка с Хайзенбергом
        </div>
        <div class="t-shirtHeisInf">
          Футболка на которой нарисован Хайзенберг
        </div>
        <div class="t-shirtprice">1 000 ₽</div>
        <q-btn
          :class="{'join-active': hasInCart === true, 'join': hasInCart === false}"



          @click="cartStore.addCartItem({
          image: tshirt1,
          name: 'Футболка с Хайзенбергом',
          price: 1000,

        })">Добавить в корзину</q-btn>
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
  margin-top: 0.3%
  margin-left: 90.5%
  position: absolute

.label1
  margin-top: 0.3%
  margin-left: 90.5%
  position: absolute
  visibility: hidden

.container1
  display: flex
  justify-content: center

.my-card
  width: 88%
  height: 100px
  border-radius: 30px

.image
  margin-left: 1%
  margin-top: -0.4%
  width: 5%
  border-radius: 15px
  position: absolute

.image3
  margin-left: 82.5%
  margin-top: 1%
  width: 2%
  position: absolute

.login
  margin-left: 82%
  margin-top: 3%
  font-weight: bold
  position: absolute

.image4
  margin-left: 88.5%
  margin-top: 1%
  width: 2%
  position: absolute

.basket
  margin-left: 88%
  margin-top: 3%
  font-weight: bold
  position: absolute

.shopinf
  width: 100%
  height: 100px
  margin-top: 8.6%

.info
  font-size: 20px
  padding-left: 10%
  padding-top: 1%

.main-card
  width: 88%
  height: 500px
  margin-top: 5%
  border-radius: 30px

.container
  display: flex
  justify-content: center

.image1
  width: 20%
  margin-top: -11%
  margin-left: 10%
  border-radius: 15px

.t-shirtheis
  font-size: 48px
  margin-left: 33%
  margin-top: -28%

.t-shirtHeisInf
  font-size: 24px
  margin-left: 33.5%
  margin-top: 2%

.t-shirtprice
  font-size: 35px
  font-weight: bold
  margin-top: 2%
  margin-left: 34%

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

.image2
  width: 4%
  margin-top: -6%
  margin-left: -4%
  border-radius: 15px

.image5
  width: 4%
  margin-left: 2%
  margin-top: 7%
  border-radius: 14px
</style>
