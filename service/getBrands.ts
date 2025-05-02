"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getBrands = () => {
    const extra = {
            id: 2,
            name: "Samsung",
            image:null,
            createdAt: "2025-04-26T11:10:08.219Z",
            updatedAt: "2025-04-26T11:10:08.219Z"
        
    }
    const {data = [], isLoading, isError} = useQuery(({
        queryKey:['brands'],
        queryFn: () => instance().get("/brands/all  ").then(res => res.data)
    }))


    return{data, isLoading, isError}
}