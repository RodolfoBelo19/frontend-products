import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/domain/models/product";
import { AxiosHttpClientGet } from "@/infra/http/axios";

export const CardProduct: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const http = new AxiosHttpClientGet();

  const fetchData = async () => {
    const { data } = await http.get({
      url: "http://localhost:3010/api/products",
    });
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-5 justify-center pt-8">
      {products.length > 0 ? (
        products.map((product) => (
          <>
            <div key={product?.id} className="border border-gray-800 p-3 m-2 rounded-lg">
              <Image
                width={170}
                height={170}
                alt={product?.name}
                src={product?.image}
              />

              <div className="flex flex-col mt-2">
                <span className="text-xs">Product {product?.name} </span>
                <span className="text-xs">Brand {product?.brand}</span>
                <span className="font-bold">R$ {product?.price}</span>
              </div>
            </div>
          </>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl">Products not found</span>
        </div>
      )}
    </div>
  );
};
