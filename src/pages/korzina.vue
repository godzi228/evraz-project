<script setup>
import { useCartStore} from "../stores/cart.js";
import { ref, computed} from "vue";
import {useUserStore} from 'src/stores/user.js'
const UserInfo = useUserStore()
const cartStore = useCartStore();



const isOrderConfirmed = ref(false);

function deleteCartItemAll() {
  let heisenberg = confirm('Вы уверены что хотите очистить корзину?')
  if(heisenberg === true) {
    cartStore.cartItems = []
  }
}

function deleteCartItem(index) {
  let heisenberg = confirm('Вы уверены что хотите удалить товар?')
  if(heisenberg === true) {
    cartStore.cartItems.splice(index, 1);
  }

}

function confirmOrder() {
  const heisenberg = confirm('Вы уверены что хотите оформить заказ?')
  if(heisenberg === true) {
    if (UserInfo.getUserMoney > cartStore.getTotal){
      UserInfo.user.money -= cartStore.getTotal
      cartStore.cartItems = []
      isOrderConfirmed.value = true
    }
    else {
      alert("Недостаточно средств")
    }
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
        <div class="login">{{ UserInfo.getUserName }}</div>
        <div class="basket">Корзина</div>
      </q-card-section>
    </q-card>
  </header>

  <div class="container">
    <q-card class="main-card">
      <q-card-section>
        <div v-if="isOrderConfirmed" class="container5">
          <img class="image7" src="https://avatars.mds.yandex.net/i?id=286b148b39aa785a8d368e7673d908d699b350b3-5220431-images-thumbs&n=13">
          <div class="div1">
            Успешно
          </div>
          <div class="div2">
            Ваш заказ был оформлен
          </div>
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
                       src="https://avatars.mds.yandex.net/i?id=53c4ccc677361c70dc0ec0a288504f80_l-5233530-images-thumbs&n=13">
                </button>
                <div class="price">
                  {{ new Intl.NumberFormat("ru").format(cartItem.price) }} ₽
                </div>

                <button class="delet" @click="deleteCartItem(index)">
                  <img class="delet"
                       src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3517303/trash-can-icon-md.png">
                </button>
              </q-card>
            </div>
            <div class="container4">
              <div class="Summ">
                Сумма заказа: {{ new Intl.NumberFormat("ru").format(cartStore.getTotal)  }} ₽
              </div>
              <div class="Summ">
                Ваш баланс: {{ new Intl.NumberFormat("ru").format(UserInfo.getUserMoney) }} ₽
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
  align-items: center
  flex-direction: column

.image7
  width: 20%

.div1
  font-size: 48px
  font-weight: bold
  margin-top: 1%

.div2
  font-size: 48px
  font-weight: bold
  margin-top: 2%


.label2
  margin-top: 0.3%
  margin-left: 90.5%
  position: absolute

.label1
  margin-top: 0.3%
  margin-left: 90.5%
  position: absolute
  visibility: hidden

.container4
  display: flex
  justify-content: space-between

.delete
  cursor: pointer

.price
  font-size: 24px
  padding-top: 50px
  margin-left: 45%
  position: absolute


.kolvo
  padding-top: 3%
  font-size: 24px
  margin-left: 9.5%
  position: absolute

.plusButton
  margin-left: 15%
  margin-top: 1%
  width: 2.5%
  border-style: none
  color: white
  background-color: white
  cursor: pointer
  position: absolute


.minusButton
  margin-top: 2%
  width: 2%
  border-style: none
  color: white
  background-color: white
  margin-left: -1%
  cursor: pointer
  position: absolute

.title
  margin-left: -50%
  margin-top: 3%
  font-size: 24px
  position: absolute

.card1
  display: flex
  flex-direction: row
  justify-content: space-around


.minus
  display: flex
  flex-direction: column
  width: 300%
  border-style: none
  color: white
  background-color: white



.plus
  display: flex
  flex-direction: column
  width: 300%
  border-style: none
  color: white
  background-color: white

.delet
  width: 50px
  margin-top: 2%
  margin-left: 80%
  border-style: none
  color: white
  background-color: white
  cursor: pointer
  position: absolute

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

.container
  display: flex
  justify-content: center


.main-card
  width: 88%
  height: 600px
  margin-top: 4%
  border-radius: 30px
  overflow: auto

.Summ
  font-size: 30px

.accept
  font-size: 17px

.image5
  width: 2%
  margin-top: -3.5%

.korzink
  margin-left: 3%
  font-weight: bold
  font-size: 30px
  margin-top: -3.5%

.image6
  width: 2%
  margin-left: 87.5%

.deletAll
  margin-left: 90%
  font-weight: bold
  font-size: 22px
  margin-top: -2%

.tshirt
  width: 6%
  margin-left: -85%
  border-radius: 20px


.container2
  margin-top: 20px
</style>
