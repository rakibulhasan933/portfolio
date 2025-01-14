import { NextResponse } from "next/server";

type FoodItem = {
    name: string;
    category: string;
    price: number;
    isVegetarian: boolean;
    image: string;
};

const foodItems: FoodItem[] = [
    { name: "Pizza", category: "Fast Food", price: 8.99, isVegetarian: false, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" },
    { name: "Burger", category: "Fast Food", price: 6.99, isVegetarian: false, image: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
    { name: "Pasta", category: "Italian", price: 7.99, isVegetarian: true, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246" },
    { name: "Salad", category: "Healthy", price: 5.99, isVegetarian: true, image: "https://images.unsplash.com/photo-1559563363-e23108c5d76a" },
    { name: "Sushi", category: "Japanese", price: 10.99, isVegetarian: false, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0" },
    { name: "Tacos", category: "Mexican", price: 6.99, isVegetarian: false, image: "https://images.unsplash.com/photo-1606851091504-75b6a2a260d4" },
    { name: "Sandwich", category: "Fast Food", price: 4.99, isVegetarian: true, image: "https://images.unsplash.com/photo-1512058564366-c9e909ca9a94" },
    { name: "Soup", category: "Healthy", price: 4.49, isVegetarian: true, image: "https://images.unsplash.com/photo-1604908177422-df4db92c6550" },
    { name: "Ice Cream", category: "Dessert", price: 3.99, isVegetarian: true, image: "https://images.unsplash.com/photo-1580467681057-7c0b5f46bc04" },
    { name: "Steak", category: "Main Course", price: 12.99, isVegetarian: false, image: "https://images.unsplash.com/photo-1569058246220-60d4e0c04d1b" },
    { name: "Fried Rice", category: "Asian", price: 5.99, isVegetarian: false, image: "https://images.unsplash.com/photo-1512058564366-c9e909ca9a94" },
    { name: "Noodles", category: "Asian", price: 6.49, isVegetarian: true, image: "https://images.unsplash.com/photo-1560807707-8cc77767d783" },
    { name: "Paneer Tikka", category: "Indian", price: 7.99, isVegetarian: true, image: "https://images.unsplash.com/photo-1603091412376-1b9f6ef99252" },
    { name: "Chicken Curry", category: "Indian", price: 9.99, isVegetarian: false, image: "https://images.unsplash.com/photo-1571402792778-dc2f7ec59b63" },
    { name: "Dumplings", category: "Chinese", price: 5.99, isVegetarian: false, image: "https://images.unsplash.com/photo-1562059390-a761a084768e" },
    { name: "Chow Mein", category: "Chinese", price: 6.49, isVegetarian: true, image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2" },
    { name: "Lasagna", category: "Italian", price: 8.99, isVegetarian: true, image: "https://images.unsplash.com/photo-1585238342023-27ff83bc3b7c" },
    { name: "Fish and Chips", category: "British", price: 7.99, isVegetarian: false, image: "https://images.unsplash.com/photo-1553621042-f6e147245754" },
    { name: "Currywurst", category: "German", price: 6.99, isVegetarian: false, image: "https://images.unsplash.com/photo-1541698444083-023c97d3f4b6" },
    { name: "Falafel", category: "Middle Eastern", price: 5.49, isVegetarian: true, image: "https://images.unsplash.com/photo-1604908177433-4a8f101b7e6e" }
];


export const GET = async () => {
    try {
        return NextResponse.json(foodItems);
    } catch (error) {
        return NextResponse.json({ error: "server error" });
    }
};