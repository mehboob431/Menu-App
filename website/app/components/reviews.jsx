'use client'
import { useState } from 'react';
import Image from 'next/image';

const ReviewCard = () => {
    const [foodDetails] = useState({
        foodName: "Margherita Pizza",
        foodImage: "/images/pizza.jpg",  // Replace with your local image path
        description: "Classic margherita pizza topped with fresh mozzarella, tomatoes, and basil.",
        price: "$12.99",
    });

    const [reviews] = useState([
        {
            reviewerName: "John Doe",
            reviewDate: "2 days ago",
            rating: 5,
            reviewText: "The pizza was absolutely delicious, with a perfect balance of cheese and toppings. Will definitely order again!",
        },
        {
            reviewerName: "Jane Smith",
            reviewDate: "5 days ago",
            rating: 4,
            reviewText: "Great taste, but the crust was a bit too thick for my liking. Still, very tasty!",
        },
    ]);

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Food Item Details */}
            <div className="flex items-center p-6 bg-gray-100">
                <div className="relative h-32 w-32 flex-shrink-0">
                    <Image 
                        src={foodDetails.foodImage} 
                        alt={foodDetails.foodName} 
                        layout="fill"
                        className="block rounded-lg"
                    />
                </div>
                <div className="ml-6">
                    <h2 className="text-2xl font-semibold text-gray-800">{foodDetails.foodName}</h2>
                    <p className="text-lg text-gray-600">{foodDetails.price}</p>
                    <p className="mt-2 text-gray-600">{foodDetails.description}</p>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Customer Reviews */}
            <div className="p-6 space-y-4">
                {reviews.map((review, index) => (
                    <div key={index} className="space-y-2">
                        <h3 className="text-lg font-semibold text-gray-800">{review.reviewerName}</h3>
                        <p className="text-sm text-gray-500">{review.reviewDate}</p>
                        <div className="flex items-center mt-1">
                            {Array(review.rating).fill().map((_, i) => (
                                <svg key={i} className="h-5 w-5 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M10 15l-5.882 3.09 1.12-6.533L.735 7.09l6.548-.953L10 0l2.717 6.137 6.548.953-4.502 4.467 1.12 6.533z"/>
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-600">{review.reviewText}</p>
                        <div className="border-t border-gray-200 mt-4"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewCard;

