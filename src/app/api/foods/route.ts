import { NextResponse } from "next/server";

const foods = [
    { name: "Pizza", category: "Fast Food", price: 8.99, isVegetarian: false, image: "https://example.com/images/pizza.jpg" },
    { name: "Burger", category: "Fast Food", price: 6.99, isVegetarian: false, image: "https://example.com/images/burger.jpg" },
    { name: "Pasta", category: "Italian", price: 7.99, isVegetarian: true, image: "https://example.com/images/pasta.jpg" },
    { name: "Salad", category: "Healthy", price: 5.99, isVegetarian: true, image: "https://example.com/images/salad.jpg" },
    { name: "Sushi", category: "Japanese", price: 10.99, isVegetarian: false, image: "https://example.com/images/sushi.jpg" },
    { name: "Tacos", category: "Mexican", price: 6.99, isVegetarian: false, image: "https://example.com/images/tacos.jpg" },
    { name: "Sandwich", category: "Fast Food", price: 4.99, isVegetarian: true, image: "https://example.com/images/sandwich.jpg" },
    { name: "Soup", category: "Healthy", price: 4.49, isVegetarian: true, image: "https://example.com/images/soup.jpg" },
    { name: "Ice Cream", category: "Dessert", price: 3.99, isVegetarian: true, image: "https://example.com/images/ice-cream.jpg" },
    { name: "Steak", category: "Main Course", price: 12.99, isVegetarian: false, image: "https://example.com/images/steak.jpg" }
];

export const GET = async () => {
    try {
        return NextResponse.json(foods);
    } catch (error) {
        return NextResponse.json({ error: "server error" });
    }
};