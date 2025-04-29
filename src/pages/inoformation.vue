<script setup>

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
]
</script>

<template>
  <div class="container1">
      <q-card class="my-card">
        <q-card-section>
          <router-link :to="{ path: '/information' }"><q-img class="image" src="https://avatars.mds.yandex.net/i?id=d8e3bb911c948ede43e0b259fa4ba5e2811516ff-12473946-images-thumbs&n=13"></q-img></router-link>
          <q-img class="image3" src="https://sun9-29.userapi.com/s/v1/ig2/jR0TieOaHjnQ-Vstw6psyVlF-vL4kxZR3nKZv3-zegtmwQ7_HUIO462wggJ_-4m6BfD0N3JxYxCU_b9LMmQ4LXkJ.jpg?size=400x400&quality=96&crop=120,54,960,960&ava=1"></q-img>
          <router-link :to="{ path: '/information/korzina' }"><q-img class="image4" src="https://static.tildacdn.com/tild6137-6234-4630-b935-383532613533/grocery-store.png"></q-img></router-link>
          <div class="login">Павел</div>
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
.container1
  display: flex
  justify-content: center

.my-card
  height: 100px
  width: 88%
  border-radius: 30px

.image
  margin-top: -7px
  width: 5%
  border-radius: 15px

.container
  display: flex
  justify-content: center

.main-card
  width: 88%
  height: 400px
  margin-top: 100px
  border-radius: 30px


.image3
  margin-left: 1345px
  margin-top: -20px
  width: 2%

.login
  margin-left: 1422px
  margin-top: -50px
  font-weight: bold

.image4
  margin-left: 1514px
  margin-top: -115px
  width: 2%

.basket
  margin-left: 1507px
  margin-top: -21px
  font-weight: bold

.image5
  margin-left: 750px
  margin-top: -450px
  width: 14%
  border-radius: 15px

.shopinf
  height: 100px
  margin-top: 260px

.info
  font-size: 20px
  padding-left: 200px
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
