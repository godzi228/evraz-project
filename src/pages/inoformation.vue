<script setup>

</script>

<template>
  <div class="container1">
      <q-card class="my-card">
        <q-card-section>
          <q-img class="image" src="https://avatars.mds.yandex.net/i?id=d8e3bb911c948ede43e0b259fa4ba5e2811516ff-12473946-images-thumbs&n=13"></q-img>
          <q-img class="image3" src="https://sun9-29.userapi.com/s/v1/ig2/jR0TieOaHjnQ-Vstw6psyVlF-vL4kxZR3nKZv3-zegtmwQ7_HUIO462wggJ_-4m6BfD0N3JxYxCU_b9LMmQ4LXkJ.jpg?size=400x400&quality=96&crop=120,54,960,960&ava=1"></q-img>
          <q-img class="image4" src="https://static.tildacdn.com/tild6137-6234-4630-b935-383532613533/grocery-store.png"></q-img>
          <div class="login">Павел</div>
          <div class="basket">Корзина</div>
        </q-card-section>
      </q-card>
  </div>
  <div class="container">
  <q-card class="main-card">
    <q-card-section>
      <div class="t-shirt1">
      <q-img class="image1" src="https://images-eu.ssl-images-amazon.com/images/I/4160rSZjMdL.jpg"></q-img>
      <div class="t-shirtprice">1 000 ₽</div>
      <div class="t-shirt">Футболка с хайзенбергом</div>
      </div>
      <div class="football1">
        <q-img class="image2" src="https://avatars.mds.yandex.net/get-mpic/4785755/2a0000018ae8028943489afac1c0808a6025/orig"></q-img>
        <div class="footballprice">35 000 ₽</div>
        <div class="football">Футбольный мячик</div>
      </div>
      <div class="phone1">
        <q-img class="image5" src="https://avatars.mds.yandex.net/i?id=8369d3b957210aaa4dede68e88780bcdc5a96adb-5876277-images-thumbs&n=13"></q-img>
        <div class="phoneprice">100 500 ₽</div>
        <div class="phone">Телефон</div>
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
  width: 5%

.container
  display: flex
  justify-content: center

.main-card
  width: 88%
  height: 400px
  margin-top: 100px
  border-radius: 30px

.image1
  width: 18%

.image2
  width: 18%

.t-shirt
  margin-top: 10px

.t-shirtprice
  font-size: 24px
  font-weight: bold

.image2
 margin-top: -450px
 margin-left: 400px

.footballprice
  font-size: 24px
  font-weight: bold
  margin-top: -89px
  margin-left: 400px

.football
  margin-left: 400px
  margin-top: 10px

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
  margin-top: -127px
  width: 2%

.basket
  margin-left: 1507px
  margin-top: -21px
  font-weight: bold

.image5
  margin-left: 750px
  margin-top: -450px
  width: 18%

.phoneprice
  font-size: 24px
  font-weight: bold
  margin-top: -89px
  margin-left: 750px

.phone
  margin-left: 750px
  margin-top: 10px

.shopinf
  height: 100px
  margin-top: 260px

.info
  font-size: 20px
  padding-left: 200px
  padding-top: 1%
</style>
