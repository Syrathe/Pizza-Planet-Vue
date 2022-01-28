<template>
    <div class="menu_wrapper">
        <!-- menu -->
        <div class="menu">
            <h3>~Authentic Handmade Pizza~</h3>
            <table v-for="item in getMenuItems" :key="item.name">
                <tbody>
                    <tr>
                        <td>
                            <strong>~ {{item.name}} ~</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <small>{{item.description}}</small>
                        </td>
                    </tr>
                    <tr v-for="(option, index) in item.options" :key="option[index]">
                        <td>{{option.size}}"</td>
                        <td>{{option.price}}</td>
                        <td class="buttonContainer" >
                            <button type="button" class="btn_green" @click="addToBasket(item, option)">+</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="basket">
            <h3>~ VBasket~</h3>
            <table>
                <tbody v-for="(item, index) in basket" :key="index">
                    <tr>
                        <td>
                            <button class="btn_green" @click="decreaseQuantity(item)">&#8722;</button>
                            <span>{{item.quantity}}</span>
                            <button class="btn_green" @click="increaseQuantity(item)">&#43;</button>
                        </td>
                        <td>{{item.name}} {{item.size}}" </td>
                        <td>${{item.price * item.quantity}}</td>
                    </tr>
                </tbody>
            </table>
            <p v-if="basket.length>0">Order total:</p>
            <button class="btn_green" v-if="basket.length>0">Place Order</button>
            <div v-else>
                <p>{{basketText}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    h3{
        text-align: center;
    }

    .menu_wrapper{
        display: flex;
        flex-direction: column;
    }

    .menu,
    .basket{
        background: #f1e6da;
        border-radius: 3px;
        height: 100vh;
        padding: 10px;
    }

    @media screen and (min-width: 900px){
        .menu_wrapper{
            flex-direction: row;
            justify-content: space-between;
        }
        .menu{
            width: 65vw;
        }
        .basket{
            width: 35vw;
        }
    }
    
</style>

<script>
    export default {
        data() {
            return{
                basket: [],
                basketText: 'Your basket is empty',
                getMenuItems:{
                    1: {
                        'name': 'Margherita',
                        'description': 'A delicious tomato based pizza topped with mozzarella',
                        'options': [
                            {
                                'size': 9,
                                'price': 6.95
                            },
                            {
                                'size': 12,
                                'price': 10.95
                            }
                        ]
                    },
                    2: {
                        'name': 'Pepperoni',
                        'description': 'A delicious tomato based pizza topped with mozzarella and pepperoni',
                        'options': [
                            {
                                'size': 9,
                                'price': 7.95
                            },
                            {
                                'size': 12,
                                'price': 12.95
                            }
                        ]
                    },
                    3: {
                        'name': 'Ham and Pineapple',
                        'description': 'A delicious tomato based pizza topped with mozzarella, ham and pineapple',
                        'options': [
                            {
                                'size': 9,
                                'price': 7.95
                            },
                            {
                                'size': 12,
                                'price': 12.95
                            }
                        ]
                    }

                }
            }
        },
        methods: {

            increaseQuantity(item){
                item.quantity++;
            },
            
            decreaseQuantity(item){
                item.quantity--;
                if(item.quantity == 0){
                    this.basket.splice(this.basket.indexOf(item), 1)
                }
            },

            async addToBasket(item, option){
                const pizzaExists = await this.basket.find(
                    pizza => pizza.name === item.name && pizza.size === option.size
                )
                if (pizzaExists){
                    pizzaExists.quantity++
                    return
                }
                this.basket.push({
                    name:item.name,
                    price:option.price,
                    size:option.size,
                    quantity:1,
                })
            }
        }
    }
</script>