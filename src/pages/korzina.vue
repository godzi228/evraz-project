<script setup>
import { useCartStore} from "../stores/cart.js";
import { ref, computed} from "vue";

const cartStore = useCartStore();



for (let cartItem in cartStore) {
  let name = cartItem.name;
}

function deleteCartItemAll() {
  cartStore.cartItems = []
}

function deleteCartItem(index) {
  cartStore.cartItems.splice(index, 1);
}

function confirmOrder() {
  cartStore.cartItems = []
  let orders = [
    {
      image: "https://avatars.mds.yandex.net/i?id=286b148b39aa785a8d368e7673d908d699b350b3-5220431-images-thumbs&n=13",
      name: 'Успешно',
      name2: 'Ваш заказ был оформлен'
    }
  ]

}
</script>


<template>
  <header class="container1">
    <q-card class="my-card">
      <q-card-section>
        <router-link :to="{ path: '/information' }"><q-img class="image" src="https://avatars.mds.yandex.net/i?id=d8e3bb911c948ede43e0b259fa4ba5e2811516ff-12473946-images-thumbs&n=13"></q-img></router-link>
        <q-img class="image3" src="https://sun9-29.userapi.com/s/v1/ig2/jR0TieOaHjnQ-Vstw6psyVlF-vL4kxZR3nKZv3-zegtmwQ7_HUIO462wggJ_-4m6BfD0N3JxYxCU_b9LMmQ4LXkJ.jpg?size=400x400&quality=96&crop=120,54,960,960&ava=1"></q-img>
        <q-img class="image4" src="https://static.tildacdn.com/tild6137-6234-4630-b935-383532613533/grocery-store.png"></q-img>
        <div class="login">Павел</div>
        <div class="basket">Корзина</div>
      </q-card-section>
    </q-card>
  </header>

  <div class="container">
    <q-card class="main-card">
      <q-card-section>
        <a class="delete">
        <q-img class="image6" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3517303/trash-can-icon-md.png"></q-img>
        <div class="deletAll" @click="deleteCartItemAll">
          Очистить всё
        </div>
        </a>
        <div>
        <q-img class="image5" src="https://static.tildacdn.com/tild6137-6234-4630-b935-383532613533/grocery-store.png"></q-img>
        <div class="korzink">Корзина</div>
        </div>
        <div>
          <div class='container2' v-for="(cartItem, index) in cartStore.cartItems">
          <q-card class="card1">
            <q-img class='tshirt' :src="cartItem.image"></q-img>
           <div class="title">
             {{cartItem.name}}
           </div>
            <button class="minusButton" @click="cartStore.decreaseCartItem(cartItem)">
              <img class='minus' src="https://avatars.mds.yandex.net/get-entity_search/10843572/1133902588/SUx182_2x">
            </button>
            <div class="kolvo">
              {{ cartItem.quantity }}
            </div>
            <button class="plusButton" @click="cartStore.increaseCartItem(cartItem)">
              <img class='plus' src="https://avatars.mds.yandex.net/i?id=1fdb23cb557c261e07f43290aa3b6f7224bd50a1-6209931-images-thumbs&n=13">
            </button>
            <div class="price">
              {{cartItem.price}} ₽
            </div>
            <button class="delet" @click="deleteCartItem(index)">
              <img class="delet" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3517303/trash-can-icon-md.png">
            </button>
          </q-card>
          </div>
          <div class="container5"  v-for="order in orders">
            <img class="image7" :src='order.image'>
            <div class="div1">
              {{ order.name }}
            </div>
            <div class="div2">
              {{ order.name2 }}
            </div>
          </div>
        <div class="container4">
          <div class="Summ">
            Сумма заказа: {{ cartStore.getTotal }} ₽
          </div>
          <q-btn class="accept" color="black" label="Оформить заказ" @click="confirmOrder"/>
        </div>
        </div>
      </q-card-section>
    </q-card>
  </div>

  <div class="container3">
    <q-card class="shopinf" style="background: black">
      <q-card-section>
        <footer class="info" style="color: white">© 2025 Железная логика. Все права защищены. ОГРН 1196658005851</footer>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped lang="sass">

.container4
  display: flex
  justify-content: space-between

.delete
  cursor: pointer

.price
  font-size: 24px
  padding-top: 50px
  margin-left: 200px

.kolvo
  padding-top: 45px
  font-size: 24px
  margin-left: 40px

.plusButton
  width: 50px
  border-style: none
  color: white
  background-color: white
  margin-left: 30px
  cursor: pointer

.minusButton
  width: 50px
  height: 30px
  border-style: none
  color: white
  background-color: white
  margin-top: 38px
  margin-left: 300px
  cursor: pointer

.title
  padding-left: 40px
  margin-top: 50px
  font-size: 24px

.card1
  display: flex
  flex-direction: row

.minus
  width: 50px
  border-style: none
  color: white
  background-color: white

.plus
  width: 50px
  border-style: none
  color: white
  background-color: white

.delet
  width: 50px
  margin-left: 130px
  border-style: none
  color: white
  background-color: white
  cursor: pointer

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
  margin-top: -7px
  width: 5%
  border-radius: 15px

.image3
  margin-left: 1345px
  margin-top: -20px
  width: 2%

.image4
  margin-left: 1514px
  margin-top: -115px
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

.accept
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
  margin-left: 1430px

.deletAll
  margin-left: 1470px
  font-weight: bold
  font-size: 22px
  margin-top: -34px

.tshirt
  width: 100px
  margin-left: 50px
  border-radius: 20px

.container2
  margin-top: 20px

</style>
