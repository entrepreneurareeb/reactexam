import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

// TypeScript interface for product details
interface ProductDetail {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
    description: string;
}

const DetailPage: React.FC = () => {
    const { id } = useParams();  // Get the product ID from the URL
    const [product, setProduct] = useState<ProductDetail | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect if the user is not logged in
        if (localStorage.getItem("isLoggedIn") !== "true") {
            navigate("/login");
            return;
        }

        // Fetch product details based on the product ID
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await response.json();
                setProduct(data);  // Set product data to state
            } catch (error) {
                console.error("Failed to fetch product details:", error);
            }
        };

        fetchProduct();
    }, [id, navigate]);  // Effect runs when the component mounts or when `id` changes

    if (!product) {
        return <div>Loading product details...</div>;
    }

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <title>{product.title} - Product Details</title>

           
            {/* Product Details Section */}
            <div className="container mx-auto max-w-6xl p-6">
                <div className="flex flex-col overflow-hidden rounded-lg border border-green-200 bg-white lg:flex-row">
                    <div className="lg:w-1/2">
                        <img
                            className="h-96 w-full object-cover"
                            src={product.image}
                            alt={product.title}
                        />
                    </div>
                    <div className="p-6 lg:w-1/2">
                        <h2 className="mb-4 text-3xl font-bold text-gray-800">{product.title}</h2>
                        <p className="mb-2 text-sm text-gray-500">Category: {product.category}</p>
                        <p className="mb-6 text-gray-700">{product.description}</p>
                        <p className="mb-6 text-2xl font-semibold text-gray-800">${product.price}</p>
                        <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

           
        </>
    );
};

export default DetailPage;
