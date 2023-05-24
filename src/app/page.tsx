import BreadCrumb from '@/Components/Breadcrumb'
import BlockChainsFilter from '@/Components/Page/Home/BlockChainFilter'
import TableChainplay from '@/Components/Page/Home/TableChainplay'
import callApi from '@/libs/callAPI'

type searchParams = {
    page: string
    blockChain: string
    search: string
}
async function getChainPlayData(page: number, blockChain: string | null, search: string | null) {
    let params = new URLSearchParams()
    params.append('page', page.toString())
    if (blockChain) params.append('blockChain', blockChain)
    if (search) params.append('search', search)
    const res = await callApi('GET', `?${params}`)
    if (res.statusCode !== 200) throw new Error('Failed to fetch data')
    return res
}

const breadCrumbs = [
    {
        name: 'Home',
        url: ''
    },
    {
        name: 'Game',
        url: ''
    },
    {
        name: 'Best Free P2E NFT Games in 2022',
        url: ''
    }
]

export default async function Home({ searchParams }: { searchParams: searchParams }) {
    const currentPage: number = searchParams.page ? parseInt(searchParams.page) : 1
    const blockChain = searchParams.blockChain
    const search = searchParams.search
    const chainPlay = await getChainPlayData(currentPage, blockChain ?? null, search ?? null)

    return (
        <main>
            <BreadCrumb data={breadCrumbs} />
            <h2 className='text-[32px] leading-[48px] text-dark-blue dark:text-white-gray font-medium'>
                Best Free P2E NFT Games in 2022
            </h2>
            <p className='text-dark-blue dark:text-true-gray mt-[6px] mb-[28px]'>
                Are you looking for Games that Free-to-play? Here are the best F2P NFT games available.
            </p>
            <BlockChainsFilter blockChain={blockChain} />
            <TableChainplay
                currentPage={currentPage}
                rowData={chainPlay.data}
                total={chainPlay.total}
                searchParams={{ page: currentPage.toString(), blockChain, search }}
            />
        </main>
    )
}
