import { burger , biryai , biryani2 , pizza , burgerDeal  } from "@/public/foodItems";
import { shoe , jeans , t_shirt , wasket  , clothes } from "@/public/products";
import { recipy_1 , recipy_2 , recipy_3 , recipy_4 } from "@/public/recipies";


export const ReciptData = [
    {
        name : "recipy_1" , 
        url : recipy_1,
        rating : 13,
        totalRating : 20,
        readyIn : " 2h 12m "
    },
    {
        name : "recipy_2" , 
        url : recipy_2,
        rating : 15,
        totalRating : 20,
        readyIn : " 1h 12m "
    },{
        name : "recipy_3" , 
        url : recipy_3,
        rating : 10,
        totalRating : 20,
        readyIn : " 0h 12m "
    },{
        name : "recipy_4" , 
        url : recipy_4,
        rating : 18,
        totalRating : 20,
        readyIn : " 1h 25m "
    }
]

export const ProductData = [
    {
        name : "shoe",
        url : shoe , 
        price : 0
    },
    {
        name : "jeans",
        url : jeans , 
        price : 0
    },
    {
        name : "t_shirt",
        url : t_shirt , 
        price : 0
    },
    {
        name : "wasket",
        url : wasket , 
        price : 0
    },
    {
        name : "clothes",
        url : clothes , 
        price : 0
    },
]
export const FoodData = [
    {
        name : "Spicy Burger",
        url : burger,
        price : 0
    },
    {
        name : "Hydrabadi biryani",
        url : biryai,
        price : 0
    },
    {
        name : "Local biryani",
        url : biryani2,
        price : 0,
    },
    {
        name : "XL Pizza",
        url : pizza,
        price : 0,
    },
    {
        name : "Burger deal",
        url : burgerDeal,
        price : 0,
    }
]