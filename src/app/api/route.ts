import { NextResponse } from 'next/server'
import chainPlays from './data.json'
import path from 'path'
import fs from 'fs'

export async function GET(request: Request) {
    try {
        const LIMIT = 10
    const { searchParams } = new URL(request.url)
    const pageParam = searchParams.get('page')
    const blockChain = searchParams.get('blockChain')
    const search = searchParams.get('search')

    let dataFilter = blockChain
        ? chainPlays.filter((chain) => chain.BlockChains.find((bl) => bl.Code === blockChain))
        : chainPlays
    dataFilter = search
        ? dataFilter.filter(
              (chain) =>
                  (chain.Name.toLocaleLowerCase().search(search) >= 0 ||
                      chain.Symbol.toLocaleLowerCase().search(search) >= 0) &&
                  chain
          )
        : dataFilter

    const page = pageParam ? parseInt(pageParam) : 1
    const step = (page - 1) * LIMIT + LIMIT
    const data = dataFilter.slice((page - 1) * LIMIT, step)
    return NextResponse.json({
        statusCode: 200,
        total: dataFilter.length,
        test: {
            page: page,
            start: (page - 1) * LIMIT,
            emd: step
        },
        data: data
    })
    } catch (error) {
        console.log('Er:',error)
    }
    
}

export async function PUT(request: Request) {
    const body = await request.json()
    const update = chainPlays.map((item: any) => (item.Code === body.Code ? body : item))

    const pathDir =  path.join(process.cwd(), '/src/app/api/data.json')
    try {
        fs.writeFileSync(pathDir, JSON.stringify(update))
    } catch (error) {
        console.log({ error })
    }

    return NextResponse.json({
        statusCode: 200
    })
}
