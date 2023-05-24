'use client'
import { ChainPlayType, HeaderTableType } from '@/constants/type'
import Pagination from '@/Components/Pagination'

interface GridTableProps {
    headers: Array<HeaderTableType>
    rowData: Array<ChainPlayType>
    currentPage: number
    total: number
    searchParams: {
        page: string
        blockChain: string | undefined
        search: string | undefined
    }
}
export default function GridTable({ headers, currentPage, total, rowData, searchParams }: GridTableProps) {
    return (
        <div>
            <table className='w-full table-auto'>
                <thead>
                    <tr className='border-b-[1px] border-blur-gray'>
                        {headers.map((head: HeaderTableType, index) => (
                            <th
                                className='text-left text-dark-blue dark:text-true-gray font-medium py-2 uppercase'
                                key={index}
                            >
                                {head.name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='dark:text-white-gray'>
                    {rowData.length === 0 && (
                        <tr>
                            <td className='py-2 text-inherit'>No data to show</td>
                        </tr>
                    )}
                    {rowData.length > 0 &&
                        rowData.map((item: ChainPlayType, index: number) => (
                            <tr key={index} className='border-b-[1px] border-[#EDF2F7] dark:border-true-gray group hover:bg-slate-100/50 hover:dark:bg-zinc-500/10 transition-all relative overflow-hidden'>
                                {headers.map((head: HeaderTableType, index: number) => <td key={index}>{head.rowRender(item, index)}</td> )}
                            </tr>
                        ))}
                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                totalRows={total}
                totalPage={Math.ceil(total / 10)}
                searchParams={searchParams}
            />
        </div>
    )
}
