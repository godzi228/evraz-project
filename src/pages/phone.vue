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
        <div class="football1">
          <q-img class="image2"  src="https://ekt-basket-cdn-01.geobasket.ru/vol1710/part171042/171042725/images/c246x328/1.webp"></q-img>
          <q-img class="image5" src="https://ekt-basket-cdn-01.geobasket.ru/vol1710/part171042/171042725/images/c246x328/2.webp"></q-img>
          <q-img class="image6"  src="https://ekt-basket-cdn-01.geobasket.ru/vol1710/part171042/171042725/images/c246x328/1.webp"></q-img>
          <div class="football">Смартфон iPhone 14 Pro 256 ГБ Dual SIM тёмно-фиолетовый</div>
          <div class="opis">Телефон iPhone 14 Pro 256 ГБ с батареей, которая обеспечит до 23 часов беспрерывного просмотра видео.</div>
          <div class="footballprice">35 000 ₽</div>
          <q-btn color="black" class="join">
            Добавить в корзину
          </q-btn>
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
  margin-top: -10px
  width: 5%

.container
  display: flex
  justify-content: center

.main-card
  width: 88%
  height: 500px
  margin-top: 100px
  border-radius: 30px

.image1
  width: 18%

.image2
  width: 22%
  margin-left: 150px

.t-shirt
  margin-top: 10px

.t-shirtprice
  font-size: 24px
  font-weight: bold


.footballprice
  font-size: 35px
  font-weight: bold
  margin-top: 5d0px
  margin-left: 550px

.football
  font-size: 48px
  margin-left: 550px
  margin-top: -490px

.opis
  font-size: 24px
  margin-left: 550px
  margin-top: 50px

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
  margin-top: 160px

.info
  font-size: 20px
  padding-left: 200px
  padding-top: 1%

.join
  width: 16%
  height: 50px
  margin-left: 550px
  margin-top: 60px
  border-radius: 10px

.image5
  width: 5%
  margin-left: -500px
  margin-top: -50px
.image6
  width: 5%
  margin-left: -82px
  margin-top: -300px
</style>
