'use client'
import Input from "@/Components/Input";
import { iconSearch } from "@/constants/icon";
import useInput from "@/hooks/useInput";
import { useRouter } from "next/navigation";

export default function Search () {
    const router = useRouter()
    const searchInput = useInput('')

    const onSubmit = (e: any) => {
        e.preventDefault()
        router.push(searchInput.value ? `/?search=${searchInput.value}` : '/')
    }
    return (
        <div>
            <form className="w-full" onSubmit={onSubmit}>
                <Input type='text' icon={iconSearch} {...searchInput} placeholder="Search NFTs / Collections / Addresses" className="w-[338px]"/>
            </form>
        </div>
    )
}