"use client"
import { LocationIcon } from '@/assets/icons'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HeaderTopStyle } from './styles'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { getCookie } from 'cookies-next'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"



const HeaderTop = () => {
  const router = useRouter();
  const pathname = usePathname();

  const t = useTranslations("HeaderTopContent")
  const [lang, setLang] = useState<"uz" | "ru" | "en" | any>(getCookie("NEXT_LOCALE") || "uz")

  function changeLang(value:string) {
    setLang(value)
    router.push(pathname, { locale: value });
  }
  useEffect(() => {
    const locale = getCookie("NEXT_LOCALE");
    if (locale === "uz" || "ru" || locale === "en") {
      setLang(locale);
    }
  }, [])

  return (
    <HeaderTopStyle>
      <div className="containers header-top">
        <nav>
          <Link href={"/"}>
            <LocationIcon />
            <span>{t("tashkent")}</span>
          </Link>
          <Link href={"/"}>{t("about-us")}</Link>
          <Link href={"/"}>{t("products")}</Link>
          <Link href={"/"}>{t("contacts")}</Link>
        </nav>
        <div>
          <Link href={'tel:+998711234567'}>+998 (71) 123-45-67</Link>
          <Select onValueChange={changeLang} defaultValue={lang}>
            <SelectTrigger className="w-[65px] border-none shadow-none placeholder:text-[15px] text-[#545D6A] ">
              <SelectValue placeholder="Uz" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup  className="bg-white border border-gray-200 shadow-lg rounded-md">
                <SelectItem className="px-3 py-2 text-sm hover:bg-blue-100 cursor-pointer" value="uz">Uz</SelectItem>
                <SelectItem className="px-3 py-2 text-sm hover:bg-blue-100 cursor-pointer"  value="ru">Ru</SelectItem>
                <SelectItem className="px-3 py-2 text-sm hover:bg-blue-100 cursor-pointer"  value="en">En</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </HeaderTopStyle>
  )
}

export default HeaderTop