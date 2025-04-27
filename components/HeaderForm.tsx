"use client";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import Button from "./Button";
import { ArrowDownIcon, SearchIcon } from "@/assets/icons";
import Input from "./Input";
import { useTranslations } from "next-intl";
import { Context } from "../context/Context";
import { instance } from "@/hooks/instance";
import debounce from "@/hooks/debounce";
import { HeaderSearchType } from "@/types/HeaderCenterType";
import { Link } from "@/i18n/navigation";

const HeaderForm = () => {
  const t = useTranslations("HeaderCenterContent");
  const { setShowCategory, showCategory } = useContext(Context);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<HeaderSearchType[]>([])
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
    setIsLoading(true)
    setShowSearch(true)
    if(!e.target.value){
        setShowSearch(false)
        setIsLoading(false)
    }
  }
  function handleSearchClick(name:string){
    setSearchValue(name)
    setShowSearch(false)
    // ... boshqa pagega yo`naltirish kerak
  }
const searchWatingValue = debounce(searchValue,1000)
  useEffect(() => {
    if(searchWatingValue){
        instance()
        .get("/categories/search", { params: { name:searchWatingValue } })
        .then((res) => {
            setSearchResult(res.data);
            setIsLoading(false)
        });
    }
  
  }, [searchWatingValue]);

  

  return (
    <div className="flex items-center gap-[10px]">
      <Button
        onClick={() => setShowCategory(!showCategory)}
        title={t("category")}
        iconPosition="right"
        icon={
          <ArrowDownIcon
            className={`transition-transform duration-300 ${
              showCategory ? "rotate-180" : ""
            }`}
          />
        }
      />

      <div className="w-[518px] relative ">
        <Input
        value={searchValue }
          onChange={handleSearch}
          extraStyle="w-full"
          type="text"
          placeholder={t("placeholder")}
        />
        <Button
          extrStyle="absolute top-0 bottom-0 right-0 !w-[58px] h-[100%] !p-0"
          iconPosition="right"
          icon={<SearchIcon />}
        />

        <ul className={`bg-white ${showSearch ? `h-[400px] ${searchResult.length > 2 ? "h-[400px] overflow-auto" : "h-auto"} py-[40px] ` : "h-0 overflow-hidden"} duration-300 absolute z-50 flex flex-col shadow w-full`} >
            { isLoading ? "Loading..." : showSearch && searchResult.map(item => <li onClick={() => handleSearchClick(item.name)} className='pl-[40px] py-[17px] border-b-[1px] text-[#545D6A] border-[#B6BABF4D]' key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default HeaderForm;
