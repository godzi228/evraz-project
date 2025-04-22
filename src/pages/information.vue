<script setup>

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
        <q-img class="image5" src="https://ir-8.ozone.ru/s3/multimedia-1-5/wc1000/7197436049.jpg"></q-img>
        <q-img class="image2" src="https://ir-8.ozone.ru/s3/multimedia-1-6/wc1000/7197436050.jpg"></q-img>
        <div class="t-shirt1">
          <q-img class="image1" src="https://ir-8.ozone.ru/s3/multimedia-1-6/wc1000/7197436050.jpg"></q-img>
        </div>
        <div class="t-shirtheis">
          Футболка с Хайзенбергом
        </div>
        <div class="t-shirtHeisInf">
          Футболка на которой нарисован Хайзенберг
        </div>
        <div class="t-shirtprice">1 000 ₽</div>
        <q-btn class="join" color="black">Добавить в корзину</q-btn>
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
  margin-top: -10px
  width: 5%

.basket
  margin-left: 1507px
  margin-top: -21px
  font-weight: bold

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
  margin-top: -110px
  width: 2%

.shopinf
  height: 100px
  margin-top: 160px

.info
  font-size: 20px
  padding-left: 200px
  padding-top: 1%

.main-card
  width: 88%
  height: 500px
  margin-top: 100px
  border-radius: 30px

.container
  display: flex
  justify-content: center

.image1
  width: 20%
  margin-top: -180px
  margin-left: 140px

.t-shirtheis
  margin-left: 600px
  margin-top: -400px
  font-size: 40px

.t-shirtHeisInf
  margin-top: 40px
  margin-left: 600px
  font-size: 18px

.t-shirtprice
  margin-top: 40px
  margin-left: 600px
  font-size: 40px
  font-weight: bold

.join
  margin-left: 610px
  margin-top: 20px
  width: 230px
  height: 60px
  border-radius: 10px

.image2
  width: 4%
  margin-top: -100px
  margin-left: -65px

.image5
  width: 4%
  margin-left: 10px
  margin-top: 110px
</style>
