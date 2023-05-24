'use client'

import Button from '@/Components/Button'
import Input from '@/Components/Input'
import ListBox from '@/Components/ListBox'
import PopupModal from '@/Components/Modal'
import { blockChains, genresList, flatformList } from '@/constants/dataDropdown'
import { iconXMark } from '@/constants/icon'
import { ChainPlayType } from '@/constants/type'
import useInput from '@/hooks/useInput'
import callApi from '@/libs/callAPI'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface ModalUpdateProps {
    isOpen: boolean
    itemUpdate: ChainPlayType | null
    closeModal: () => void
}
type ItemType = {
    Name: string
    Code: string
}
export default function ModalUpdate({ isOpen, itemUpdate, closeModal }: ModalUpdateProps) {
    const router = useRouter()

    const [selectedBlockchain, setSelectedBlockchain] = useState<Array<ItemType>>([])
    const [selectedGenre, setSelectedGenre] = useState<Array<ItemType>>([])
    const [selectedFlatform, setSelectedFlatform] = useState<Array<ItemType>>([])

    // Form
    const nameInput = useInput('')
    const codeInput = useInput('')
    const symbolInput = useInput('')
    const priceInput = useInput('')
    const [imageUrl, setImageUrl] = useState('')
    //
    const checkSelected = (code: string, arr: any) => {
        return arr.find((item: any) => item.Code === code)
    }

    const handleSelectItem = (item: Array<ItemType>, setArr: any) => {
        setArr(item)
    }

    const handleRemoveTagChip = (item: ItemType, array: Array<ItemType>, setArr: any) => {
        setArr(array.filter((e: any) => e.Code !== item.Code))
    }
    const renderChip = (array: Array<any>, setArr: any) => {
        if (array.length > 0)
            return (
                <div className='flex flex-wrap gap-1 mt-1'>
                    {array.map((item: ItemType, index: number) => (
                        <span
                            key={index}
                            className='flex items-center gap-1 p-1 cursor-pointer rounded transition-all bg-gray-500/10 hover:bg-gray-500/30 text-xs leading-3 dark:bg-gray-600/70 hover:dark:bg-gray-600 dark:text-white-gray'
                            onClick={() => handleRemoveTagChip(item, array, setArr)}
                        >
                            {item.Name}
                            <span>{iconXMark}</span>
                        </span>
                    ))}
                </div>
            )
    }

    const onSubmit = async (e: any) => {
        e.preventDefault()

        const data = {
            Name: nameInput.value,
            Code: codeInput.value,
            Symbol: symbolInput.value,
            Price: priceInput.value,
            ImageUrl: imageUrl,
            BlockChains: selectedBlockchain,
            Genres: selectedGenre,
            Platforms: selectedFlatform,
        }
        const res = await callApi('PUT', '', data)
        if (res.statusCode === 200) {
            closeModal()
            router.refresh()
            return
        }
    }
    useEffect(() => {
        if (itemUpdate) {
            // Set value to Form
            nameInput.setValueStr(itemUpdate.Name)
            codeInput.setValueStr(itemUpdate.Code)
            symbolInput.setValueStr(itemUpdate.Symbol)
            priceInput.setValueStr(itemUpdate.Price)
            setImageUrl(itemUpdate.ImageUrl)
            setSelectedBlockchain(itemUpdate.BlockChains)
            setSelectedGenre(itemUpdate.Genres)
            setSelectedFlatform(itemUpdate.Platforms)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemUpdate])
    return (
        <PopupModal isOpen={isOpen} closeModal={closeModal}>
            <form onSubmit={onSubmit}>
                <div className='flex gap-6 pb-3'>
                    <Input type='text' label='Name' {...nameInput} disabled={true} className='w-full' />
                    <Input type='text' label='Code' {...codeInput} disabled={true} className='w-full' />
                </div>
                <div className='flex gap-6 border-b-[1px] border-slate-500/20 pb-3'>
                    <Input type='text' label='Symbol' {...symbolInput} className='w-full' />
                    <Input type='number' label='Price' {...priceInput} className='w-full' />
                </div>
                <div className='flex flex-wrap justify-between border-b-[1px] border-slate-500/20 pb-3 pt-1'>
                    <div className='w-[calc(50%-16px)]'>
                        <ListBox
                            label='Blockchain'
                            data={blockChains}
                            multiple={true}
                            selected={selectedBlockchain}
                            checkSelected={(code: string) => checkSelected(code, selectedBlockchain)}
                            onChange={(item: Array<ItemType>) => handleSelectItem(item, setSelectedBlockchain)}
                        />
                        {renderChip(selectedBlockchain, setSelectedBlockchain)}
                    </div>
                    <div className='w-[calc(50%-16px)]'>
                        <ListBox
                            label='Genres'
                            data={genresList}
                            multiple={true}
                            selected={selectedGenre}
                            checkSelected={(code: string) => checkSelected(code, selectedGenre)}
                            onChange={(item: Array<ItemType>) => handleSelectItem(item, setSelectedGenre)}
                        />
                        {renderChip(selectedGenre, setSelectedGenre)}
                    </div>
                    <div className='w-[calc(50%-16px)]'>
                        <ListBox
                            label='Platforms'
                            data={flatformList}
                            multiple={true}
                            selected={selectedFlatform}
                            checkSelected={(code: string) => checkSelected(code, selectedFlatform)}
                            onChange={(item: Array<ItemType>) => handleSelectItem(item, setSelectedFlatform)}
                        />
                        {renderChip(selectedFlatform, setSelectedFlatform)}
                    </div>
                </div>
                <div className='border-b-[1px] border-slate-500/20 pb-3 pt-1'>
                    <label className='dark:text-true-gray ml-5 text-sm'>Image</label>
                    {imageUrl && <Image src={imageUrl} alt='' width={100} height={100} />}
                </div>
                <div className='flex gap-2 justify-end mt-2'>
                    <Button variant='disabled' name="Cancel" className='w-[120px]' handleClick={() => closeModal()} />
                    <Button variant='default' name="Submit" type="submit" className='w-[120px]' />
                </div>
            </form>
        </PopupModal>
    )
}
