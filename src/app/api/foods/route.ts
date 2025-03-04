import { NextResponse } from "next/server";

type FoodItem = {
    name: string;
    category: string;
    price: number;
    isVegetarian: boolean;
    image: string;
    id: number;
};

const foodItems: FoodItem[] = [
    { id: 1, name: "Pizza", category: "Fast Food", price: 8.99, isVegetarian: false, image: "https://cdn.pixabay.com/photo/2024/03/15/16/25/pizza-8635314_640.jpg" },
    { id: 2, name: "Burger", category: "Fast Food", price: 6.99, isVegetarian: false, image: "https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg" },
    { id: 3, name: "Pasta", category: "Italian", price: 7.99, isVegetarian: true, image: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg" },
    { id: 4, name: "Salad", category: "Healthy", price: 5.99, isVegetarian: true, image: "https://media.istockphoto.com/id/175197961/photo/salad-plate.jpg?s=612x612&w=0&k=20&c=9lxiIPsTBH7ytCXWuC__FvWyxkPxtkJ2evoNLrwhOVA=" },
    { id: 5, name: "Sushi", category: "Japanese", price: 10.99, isVegetarian: false, image: "https://img.freepik.com/free-photo/painting-sushi-plate-with-picture-fish-it_188544-12221.jpg" },
    { id: 6, name: "Tacos", category: "Mexican", price: 6.99, isVegetarian: false, image: "https://img.freepik.com/free-photo/mexican-tacos-with-beef-tomato-sauce-salsa_2829-14218.jpg" },
    { id: 7, name: "Sandwich", category: "Fast Food", price: 4.99, isVegetarian: true, image: "https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg" },
    { id: 8, name: "Soup", category: "Healthy", price: 4.49, isVegetarian: true, image: "https://t3.ftcdn.net/jpg/06/07/83/76/360_F_607837697_RaFl9VbfPVgQReI63ZoKsZNQCqKu0lI4.jpg" },
    { id: 9, name: "Ice Cream", category: "Dessert", price: 3.99, isVegetarian: true, image: "https://media.istockphoto.com/id/685816670/photo/variety-of-ice-cream-cones.jpg?s=612x612&w=0&k=20&c=I2BkvccjpB6nkLnWxY6AGh0RAonuPMwHk-rsBhK18IQ=" },
    { id: 10, name: "Steak", category: "Main Course", price: 12.99, isVegetarian: false, image: "https://img.freepik.com/free-photo/juicy-steak-medium-rare-beef-with-spices-grilled-vegetables_24972-2328.jpg" },
    { id: 11, name: "Fried Rice", category: "Asian", price: 5.99, isVegetarian: false, image: "https://images.getrecipekit.com/20220904015448-veg-20fried-20rice.png?aspect_ratio=16:9&quality=90&" },
    { id: 12, name: "Noodles", category: "Asian", price: 6.49, isVegetarian: true, image: "https://static.vecteezy.com/system/resources/previews/023/580/730/non_2x/chow-mein-fried-noodles-with-chicken-and-vegetables-generative-ai-photo.jpg" }
];


export const GET = async () => {
    try {
        return NextResponse.json(foodItems);
    } catch (error) {
        return NextResponse.json({ error: "server error" });
    }
};