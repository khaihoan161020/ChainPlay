'use client'
import ListBox from '@/Components/ListBox'
import { blockChains } from '@/constants/dataDropdown'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type CateType = {
    Name: string
    Code: string
}

const otherBlockchain: any = {
    Name: 'All Blockchain',
    Code: 'other'
}
export default function BlockChainsFilter({ blockChain }: { blockChain: string }) {
    const router = useRouter()
    const [data] = useState([otherBlockchain, ...blockChains])
    const handleChangeFilter = (item: CateType) => {
        if (item.Code === 'other') {
            router.push('/')
            return
        }
        router.push(`/?blockChain=${item.Code}`)
    }

    const curSelected = () => {
        const check = blockChains.find((e: CateType) => e.Code === blockChain)
        return (
            check ?? {
                Name: 'All Blockchain',
                Code: 'other'
            }
        )
    }
    const checkSelected = (code: string) => {

        // const check = blockChains.find((e: CateType) => e.Code === code)
        // return curSelected()
    }

    return (
        <ListBox
            label={' '}
            data={data}
            selected={curSelected()}
            // checkSelected={checkSelected}
            multiple={false}
            className='w-52'
            onChange={handleChangeFilter}
        />
    )
}
