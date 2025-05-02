"use client";
import { IMG_API } from "@/hooks/getEnv";
import { getBrands } from "@/service/getBrands";
import { BrandsType } from "@/types/BrandsType";
import Image from "next/image";
import React from "react";
import "./style.css";

const Brands = () => {
  const { data: brands = [] } = getBrands();
console.log(brands);

  return (
    <div className="containers brands-wrapper grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {brands.map((item: BrandsType) => (
        <div
          key={item.id}
          className="brands-items flex justify-center items-center p-4 shadow rounded bg-white"
        >
          <div className="relative w-[206px] h-[73px]">
            <Image
              src={`${IMG_API}/${item.image}`}
              alt={item.name || "Brand logo"}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brands;
