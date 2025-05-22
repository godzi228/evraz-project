<script setup>
import { useCartStore} from "../stores/cart.js";
import { ref, computed} from "vue";

const cartStore = useCartStore();

const isOrderConfirmed = ref(true);

function deleteCartItemAll() {
  cartStore.cartItems = []
}

function deleteCartItem(index) {
  cartStore.cartItems.splice(index, 1);
}

function confirmOrder() {
  cartStore.cartItems = []
  const heisenberg = confirm('Вы уверены что хотите оформить заказ?')
  if(heisenberg === true) {
    isOrderConfirmed.value = true
  }
  else {
    isOrderConfirmed.value = false
  }
}



</script>


<template>
  <header class="container1">
    <q-card class="my-card">
      <q-card-section>
        <q-badge rounded color="red" :label='cartStore.getIcon' :class="{'label1': cartStore.getIcon === 0, 'label2': cartStore.getIcon >= 1}"/>
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
        <div v-if="isOrderConfirmed">
          <img>
        </div>

        <div v-else>
          <a class="delete">
            <q-img class="image6"
                   src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3517303/trash-can-icon-md.png"></q-img>
            <div class="deletAll" @click="deleteCartItemAll">
              Очистить всё
            </div>
          </a>
          <div>
            <q-img class="image5"
                   src="https://static.tildacdn.com/tild6137-6234-4630-b935-383532613533/grocery-store.png"></q-img>
            <div class="korzink">Корзина</div>
          </div>
          <div>
            <div class='container2' v-for="(cartItem, index) in cartStore.cartItems">
              <q-card class="card1">
                <q-img class='tshirt' :src="cartItem.image"></q-img>
                <div class="title">
                  {{ cartItem.name }}
                </div>
                <button class="minusButton" @click="cartStore.decreaseCartItem(cartItem)">
                  <img class='minus' src="https://avatars.mds.yandex.net/get-entity_search/10843572/1133902588/SUx182_2x">
                </button>
                <div class="kolvo">
                  {{ cartItem.quantity }}
                </div>
                <button class="plusButton" @click="cartStore.increaseCartItem(cartItem)">
                  <img class='plus'
                       src="https://avatars.mds.yandex.net/i?id=1fdb23cb557c261e07f43290aa3b6f7224bd50a1-6209931-images-thumbs&n=13">
                </button>
                <div class="price">
                  {{ cartItem.price }} ₽
                </div>
                <button class="delet" @click="deleteCartItem(index)">
                  <img class="delet"
                       src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3517303/trash-can-icon-md.png">
                </button>
              </q-card>
            </div>
            <div class="container4">
              <div class="Summ">
                Сумма заказа: {{ cartStore.getTotal }} ₽
              </div>
              <q-btn class="accept" color="black" label="Оформить заказ" @click="confirmOrder"/>
            </div>
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
.container5
  display: flex
  justify-content: center


.label2
  margin-left: 94%

.label1
  margin-left: 94%
  visibility: hidden

.container4
  display: flex
  justify-content: space-between

.delete
  cursor: pointer

.price
  font-size: 24px
  padding-top: 50px
  margin-left: 15%

.kolvo
  padding-top: 3%
  font-size: 24px
  margin-left: 3%

.plusButton
  width: 2%
  border-style: none
  color: white
  background-color: white
  margin-left: 2%
  cursor: pointer

.minusButton
  width: 2%
  border-style: none
  color: white
  background-color: white
  margin-left: 20%
  cursor: pointer

.title
  padding-left: 40px
  margin-top: 3%
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
  margin-left: 13%
  border-style: none
  color: white
  background-color: white
  cursor: pointer

.shopinf
  width: 100%
  height: 100px
  margin-top: 4.2%

.info
  font-size: 20px
  padding-left: 10%
  padding-top: 1%

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

.container
  display: flex
  justify-content: center

.main-card
  width: 88%
  height: 600px
  margin-top: 4%
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
