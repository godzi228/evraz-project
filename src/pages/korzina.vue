<script setup>

</script>

<template>
  <div class="container1">
    <q-card class="my-card">
      <q-card-section>
        <router-link :to="{ path: '/information' }"><q-img class="image" src="https://avatars.mds.yandex.net/i?id=d8e3bb911c948ede43e0b259fa4ba5e2811516ff-12473946-images-thumbs&n=13"></q-img></router-link>
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
        <div>
        <q-img class="image6" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3517303/trash-can-icon-md.png"></q-img>
        <div class="deletAll">Очистить всё</div>
        </div>
        <div>
        <q-img class="image5" src="https://static.tildacdn.com/tild6137-6234-4630-b935-383532613533/grocery-store.png"></q-img>
        <div class="korzink">Корзина</div>
        </div>
        <div>
        <div class="Summ">Сумма заказа:</div>
        <q-btn class="join" color="black" label="Оформить заказ" />
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
.shopinf
  height: 100px
  margin-top: 260px

.info
  font-size: 20px
  padding-left: 200px
  padding-top: 1%

.container1
  display: flex
  justify-content: center

.my-card
  height: 100px
  width: 88%
  border-radius: 30px

.image
  width: 5%

.image3
  margin-left: 1345px
  margin-top: -20px
  width: 2%

.image4
  margin-left: 1514px
  margin-top: -127px
  width: 2%

.login
  margin-left: 1422px
  margin-top: -50px
  font-weight: bold

.basket
  margin-left: 1507px
  margin-top: -21px
  font-weight: bold

.container
  display: flex
  justify-content: center

.main-card
  width: 88%
  height: 500px
  margin-top: 100px
  border-radius: 30px

.Summ
  font-size: 30px
  margin-left: 900px
  margin-top: 350px

.join
  margin-left: 1300px
  margin-top: -70px
  font-size: 17px

.image5
  width: 2%
  margin-top: -60px

.korzink
  margin-left: 50px
  font-weight: bold
  font-size: 30px
  margin-top: -60px

.image6
  width: 2%
  margin-top: 10px
  margin-left: 1300px

.deletAll
  margin-left: 1340px
  font-weight: bold
  font-size: 22px
  margin-top: -34px
</style>
