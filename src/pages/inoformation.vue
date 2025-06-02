<script setup>
  import {useCartStore} from 'src/stores/cart.js'
  import {useUserStore} from 'src/stores/user.js'
  const cartStore = useCartStore()
  const UserInfo = useUserStore()

  const products = [
  {
    path: '/information/t-shirt',
    image: 'https://ir-8.ozone.ru/s3/multimedia-1-6/wc1000/7197436050.jpg',
    price: '1 000 ',
    name: 'Футболка с хайзенбергом',
  },
  {
    path: '/information/ball',
    image: 'https://avatars.mds.yandex.net/get-mpic/5283489/2a0000018f9b7564f71f44452811e1ac565a/180x240',
    price: '35 000',
    name: 'Футбольный мячик',
  },
  {
    path: '/information/phone',
    image: 'https://ekt-basket-cdn-01.geobasket.ru/vol1710/part171042/171042725/images/c246x328/1.webp',
    price: '100 500',
    name: 'Телефон',
  },
    {
      path: '/information/laptop',
      image: 'https://ekt-basket-cdn-01.geobasket.ru/vol3920/part392030/392030137/images/c246x328/10.webp',
      price: '33 289',
      name: 'Ноутбук для работы',
    },
    {
      path: '/information/BreakingBadCup',
      image: 'https://ekt-basket-cdn-01.geobasket.ru/vol911/part91192/91192130/images/big/1.webp',
      price: '1 370',
      name: 'Кружка во все тяжкие',
    },
  ]

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
        <div class="products">
          <router-link
            v-for="product in products"
            :to="{ path: product.path }"
            class="product"
          >
            <div class="product-image">
              <q-img :src="product.image" />
            </div>
            <div class="product-price">{{ product.price }} ₽</div>
            <div class="product-name">{{product.name}}</div>
          </router-link>
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
  margin-top: 0.3%
  margin-left: 90.5%
  position: absolute

.label1
  margin-left: 94%
  visibility: hidden

.container1
  display: flex
  justify-content: center


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

.container
  display: flex
  justify-content: center

.main-card
  width: 88%
  height: 400px
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



.shopinf
  width: 100%
  height: 100px
  margin-top: 13.7%

.info
  font-size: 20px
  padding-left: 10%
  padding-top: 1%

.products
  display: grid
  gap: 24px
  align-items: stretch
  grid-template-columns: repeat(5, 1fr)

.product
  display: flex
  flex-direction: column
  color: black
  text-decoration: none

.product-image
  width: 100%
  height: 0
  padding-top: 100%
  position: relative
  border-radius: 12px
  margin-bottom: 8px
  overflow: hidden
  flex-grow: 1

.product-image .q-img
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%

.product-price
  font-size: 18px
  font-weight: 700
  letter-spacing: .4px
  line-height: 24px

.product-name
  font-size: 14px
  font-weight: 400
  letter-spacing: .2px
  line-height: 24px

</style>
