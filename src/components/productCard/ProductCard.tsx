import React from "react";

interface ProductCardProps {
    title: string;
    image: string;
    price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, price }) => {
    return (
        <div className="border rounded-lg overflow-hidden bg-white shadow-md">
            <img className="h-48 w-full object-cover" src={image} alt={title} />
            <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
                <p className="mb-4 text-gray-600">${price}</p>
                <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
