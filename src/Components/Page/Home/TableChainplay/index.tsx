'use client'
import GridTable from '@/Components/GridTable'
import { iconEdit } from '@/constants/icon'
import { ChainPlayType } from '@/constants/type'
import { mappingData, renderFlatform } from '@/libs'
import ModalUpdate from '../ModalUpdate'
import Image from 'next/image'
import { Fragment, useState } from 'react'

interface GridTableProps {
    rowData: Array<ChainPlayType>
    currentPage: number
    total: number
    searchParams: {
        page: string
        blockChain: string | undefined
        search: string | undefined
    }
}

export default function TableChainplay({ currentPage, total, rowData, searchParams }: GridTableProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [itemUpdate, setItemUpdate] = useState<ChainPlayType | null>(null)
    const closeModal = () => {
        setIsOpen(false)
        setItemUpdate(null)
    }
    const openModal = (item: any) => {
        setIsOpen(true)
        setItemUpdate(item)
    }
    const headers = [
        {
            name: '#',
            col: 0,
            rowRender: (item: any, index: number) => {
                return <div>{(currentPage - 1) * 10 + index + 1}</div>
            }
        },
        {
            name: 'Name',
            col: 5,
            rowRender: (item: any, index: number) => {
                return (
                    <Fragment>
                        <div className='flex gap-4 py-3'>
                            <Image
                                src={item.ImageUrl}
                                alt=''
                                width={40}
                                height={40}
                                style={{ width: '40px', height: '40px' }}
                                className='rounded-full'
                            />
                            <div>
                                <p className='text-dark-blue text-inherit font-medium'>
                                    {' '}
                                    {item.Name} <span className='text-blur-gray uppercase'>{item.Symbol}</span>
                                </p>
                                {mappingData(item.BlockChains, 'ExtendValue') && (
                                    <div className='flex gap-1'>
                                        {mappingData(item.BlockChains, 'ExtendValue').map(
                                            (imgCoin: string, index: number) =>
                                                imgCoin && (
                                                    <Image
                                                        key={index}
                                                        src={imgCoin}
                                                        alt=''
                                                        width={20}
                                                        height={20}
                                                        className='rounded-full'
                                                    />
                                                )
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </Fragment>
                )
            }
        },
        {
            name: 'Genre',
            col: 3,
            rowRender: (item: any, index: number) => {
                return <>{mappingData(item.Genres, 'Name').join(' | ')}</>
            }
        },
        {
            name: 'Flatform',
            col: 2,
            rowRender: (item: any, index: number) => {
                return (
                    <>
                        {mappingData(item.Platforms, 'Code').map((e: any, index: number) => (
                            <span key={index} className='inline-block mr-1'>
                                {renderFlatform(e)}
                            </span>
                        ))}
                        <div
                            onClick={() => openModal(item)}
                            className='flex cursor-pointer items-center opacity-0 absolute transition-all z-10 top-0 group-hover:opacity-100 group-hover:right-0 -right-3 px-4 h-full bg-slate-100 dark:bg-[#262626]'
                        >
                            {iconEdit}
                        </div>
                    </>
                )
            }
        }
    ]
    return (
        <Fragment>
            <GridTable
                headers={headers}
                currentPage={currentPage}
                rowData={rowData}
                total={total}
                searchParams={searchParams}
            />
            {isOpen && <ModalUpdate isOpen={isOpen} itemUpdate={itemUpdate} closeModal={closeModal} />}
        </Fragment>
    )
}
