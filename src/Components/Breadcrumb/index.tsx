import { iconIcChevonDown } from '@/constants/icon'
import Link from 'next/link'

type BreadCrumbType = {
    name: string
    url: string
}
interface BreadCrumbProps {
    data: Array<BreadCrumbType>
}
export default function BreadCrumb({ data }: BreadCrumbProps) {
    return (
        <div className='my-8'>
            {data.map((item: BreadCrumbType, index: number) => (
                <div key={index} className='inline-block'>
                    <div className='flex items-center w-fit'>
                        <Link href={item.url} className='text-navi dark:text-true-gray text-[13px] leading-[20px]'>
                            {item.name}
                        </Link>
                        {index !== data.length - 1 && <span>{iconIcChevonDown}</span>}
                    </div>
                </div>
            ))}
        </div>
    )
}
