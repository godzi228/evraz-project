<script setup>

</script>

<template>
  <div class="container1">
  <q-card class="my-card">
    <q-card-section>
      <q-img class="image" src="https://avatars.mds.yandex.net/i?id=2a000001962a894f0d0bfcd20e27ac68496a-1614014-fast-images&n=13"></q-img>
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

.image
  width: 9%

.container
  display: flex
  justify-content: center

.main-card
  width: 88%
  height: 400px
  margin-top: 100px

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
</style>
