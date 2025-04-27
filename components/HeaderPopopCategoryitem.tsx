// import { IMG_API } from '@/hooks/getEnv'
// import { Link } from '@/i18n/navigation'
// import { HeaderCategoriesType } from '@/types/HeaderButtomType'
// import Image from 'next/image'
// import React, { FC } from 'react'

// const HeaderPopapCategoryItem: FC<{ item: HeaderCategoriesType }> = ({ item }) => {
//   return (
//     <Link
//       className="
//         group
//         py-[12px] flex items-center gap-[15px] pl-[40px] mt-[5px] text-[16px] 
//         text-[#1F2937] hover:bg-[#1F2937] hover:text-white 
//         transition-all duration-300 ease-in-out rounded-md
//       "
//       href="/"
//     >
//       <Image
//         className="
//           w-[24px] h-[24px] 
//           transition-transform duration-300 
//           group-hover:scale-110
//         "
//         src={`${IMG_API}/${item.icon}`}
//         alt="category icon"
//         width={24}
//         height={24}
//         priority
//       />
//       <span>{item.name}</span>
//     </Link>
//   )
// }

// export default HeaderPopapCategoryItem
