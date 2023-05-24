type LinkType = {
    name: string,
    url: string
}

type HeaderTableType = {
    name: string,
    col: number,
    rowRender?: any
}
type BlockChainType = {
    Name: 'Ethereum' | 'Solana' | 'BNB Chain' | 'NEAR' | 'BNB Chain' | 'Immutable-X' | 'Avalanche' | 'Harmony' | 'Polygon' | 'OKExChain' | 'Other',
    Code: 'ethereum' | 'solana' | 'bsc' | 'near' | 'bsc' | 'immutable-x' | 'avalanche' | 'harmony' | 'polygon' | 'okexchain' | 'other',
    ExtendValue: string
}
type GenreType = {
    Name: 'Metaverse' | 'MMORPG' | 'Combat' | 'Metaverse' | 'Arcade' | 'Casual' | 'Survival' | 'Sports' | 'DeFi' | 'Tower Defense' | 'City Building' | 'Puzzle' | 'Horror Game' | 'MOBA' | 'AR' | 'Idle Game' | 'FPS' | 'Battle Royale' | 'Sci-Fi' | 'Fantasy' | 'Racing' | 'Breeding' | 'Action' | 'VR' | 'Adventure' | 'RPG' | 'Move To Earn' | 'Space Game' | 'Card Game' | 'Simulation' | 'Virtual-World' | 'Base Building' | 'Collectible' | 'Minigame' | 'Football Game' | 'Turn-based Strategy' | 'PVP' | 'Strategy' | 'MMO' | 'Other',
    Code: 'metaverse' | 'mmorpg' | 'combat' | 'metaverse' | 'arcade' | 'casual' | 'survival' | 'sports' | 'defi' | 'tower-defense' | 'city-building' | 'puzzle' | 'horror-game' | 'moba' | 'ar' | 'idle game' | 'fps' | 'battle-royale' | 'sci-fi' | 'fantasy' | 'racing' | 'breeding' | 'action' | 'vr' | 'adventure' | 'rpg' | 'move-to-earn' | 'space-game' | 'card-game' | 'simulation' | 'virtual-world' | 'base-building' | 'collectible' | 'minigame' | 'football game' | 'turn-based strategy' | 'pvp' | 'strategy' | 'mmo' | 'other'
}
type PlatformType = {
    Name: 'Browser' | 'Mobile' | 'Windows' | 'Android' | 'iOS' | 'PC' | 'Mac' | 'Linux',
    Code: 'browser' | 'mobile' | 'windows' | 'android' | 'iOS' | 'pc' | 'mac' | 'linux',
}
type ChainPlayType = {
    Code: string,
    Name: string,
    ImageUrl: string
    BlockChains: Array<BlockChainType>,
    Genres: Array<GenreType>,
    Platforms: Array<PlatformType>
    Price: Float32Array
    Symbol: string
}


export type {
    LinkType,
    HeaderTableType,
    ChainPlayType,
    BlockChainType
}