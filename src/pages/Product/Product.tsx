import React, { useState, useEffect } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { useNavigate } from "react-router"; 

interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
    description: string;
}

const Ecommerce: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();  // Hook for navigation

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                setProducts(data.products); // Store fetched products in state
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div className="text-center py-8">Loading products...</div>;
    }

    // Navigate to the product detail page
    const handleProductClick = (id: number) => {
        navigate(`/product/${id}`);
    };

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <title>E-Commerce App</title>

            <div className="container mx-auto bg-white p-6">
                <h1 className="mb-6 text-3xl font-bold text-gray-800">Featured Products</h1>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="cursor-pointer"
                            onClick={() => handleProductClick(product.id)}
                        >
                            <ProductCard
                                title={product.title}
                                image={product.image}
                                price={product.price}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Ecommerce;
