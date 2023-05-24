import { LinkType } from '@/constants/type'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../../Button'
import Search from './Search'
import ToggleMode from './ToggleMode'
export default function MenuBar() {
    const menuLists: Array<LinkType> = [
        {
            name: 'Explore',
            url: ''
        },
        {
            name: 'Genres',
            url: ''
        },
        {
            name: 'Whitelists',
            url: ''
        },
        {
            name: 'Learn',
            url: ''
        },
        {
            name: 'Community',
            url: ''
        }
    ]
    return (
        <div className='h-[64px] px-10 bg-white dark:bg-black-gray/20 flex justify-between items-center shadow-sm'>
            <div className='flex gap-[26px]'>
                <div className='flex gap-[10px]'>
                    <Link href={''}>
                        <Image className='dark:invert' src='/chainPlay_b.svg' alt='' width={192} height={32} />
                    </Link>
                </div>
                <ul className='flex items-center'>
                    {menuLists.map((link: LinkType, index: number) => (
                        <li key={index} className='font-medium text-dark-blue'>
                            <Link href={link.url} className='px-[14px] py-2 dark:text-white-gray'>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Search />
            </div>
            <div className='flex items-center'>
                <ToggleMode />
                <Button name='Login' />
                <Button name='Sign up' variant='default' className='ml-3' />
            </div>
        </div>
    )
}
