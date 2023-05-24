type CateType = {
    Name: string,
    Code: string
}
const blockChains = [
    {
        "Name": "Ethereum",
        "Code": "ethereum",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/ethereum_20220613095445.png"
    },
    {
        "Name": "Solana",
        "Code": "solana",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/solana_20220613095447.png"
    },
    {
        "Name": "BNB Chain",
        "Code": "bsc",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/bsc_20220613095442.png"
    },
    {
        "Name": "Immutable-X",
        "Code": "immutable-x",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/immutablex_20220613095446.png"
    },
    {
        "Name": "Other",
        "Code": "other",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/other_20220613095443.png"
    },
    {
        "Name": "NEAR",
        "Code": "near",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/near_20220613095454.png"
    },
    {
        "Name": "Polygon",
        "Code": "polygon",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/polygon_20220613095444.png"
    },
    {
        "Name": "NEO",
        "Code": "neo",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/neo_20220613095450.png"
    },
    {
        "Name": "Avalanche",
        "Code": "avalanche",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/avalanche_20220613095455.png"
    },
    {
        "Name": "Harmony",
        "Code": "harmony",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/harmony_20220613095457.png"
    },
    {
        "Name": "BNB Sidechain",
        "Code": "bnb-sidechain",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/BNBSidechain_20220805110008.jpg"
    },
    {
        "Name": "Fantom",
        "Code": "fantom",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/fantom_20220613095509.png"
    },
    {
        "Name": "Arbitrum One",
        "Code": "arbitrum-one",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/ArbitrumOne_20220806101641.jpg"
    },
    {
        "Name": "Moonriver",
        "Code": "moonriver",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/moonriver_20220613095514.png"
    },
    {
        "Name": "Moonbeam",
        "Code": "moonbeam",
        "ExtendValue": null
    },
    {
        "Name": "Cronos",
        "Code": "cronos",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/Cronoschain_20220806002025.jpg"
    },
    {
        "Name": "OKExChain",
        "Code": "okexchain",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/okexchain_20220613095458.png"
    },
    {
        "Name": "Wanchain",
        "Code": "wanchain",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/Wanchain_20220806101721.jpg"
    },
    {
        "Name": "Celo",
        "Code": "celo",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/celo_20220613095506.png"
    },
    {
        "Name": "Qtum",
        "Code": "qtum",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/qtum_20220613095510.png"
    },
    {
        "Name": "Terra",
        "Code": "terra",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/terra_20220613095502.png"
    },
    {
        "Name": "TRON",
        "Code": "tron",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/tron_20220613095449.png"
    },
    {
        "Name": "Aurora",
        "Code": "aurora",
        "ExtendValue": "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/aurora_20220613095503.png"
    }
]

const genresList = [
    {
        "Name": "Metaverse",
        "Code": "metaverse"
    },
    {
        "Name": "MMORPG",
        "Code": "mmorpg"
    },
    {
        "Name": "Combat",
        "Code": "combat"
    },
    {
        "Name": "Arcade",
        "Code": "arcade"
    },
    {
        "Name": "Casual",
        "Code": "casual"
    },
    {
        "Name": "Survival",
        "Code": "survival"
    },
    {
        "Name": "Sports",
        "Code": "sports"
    },
    {
        "Name": "DeFi",
        "Code": "defi"
    },
    {
        "Name": "Tower Defense",
        "Code": "tower-defense"
    },
    {
        "Name": "City Building",
        "Code": "city-building"
    },
    {
        "Name": "Puzzle",
        "Code": "puzzle"
    },
    {
        "Name": "Horror Game",
        "Code": "horror-game"
    },
    {
        "Name": "MOBA",
        "Code": "moba"
    },
    {
        "Name": "AR",
        "Code": "ar"
    },
    {
        "Name": "Idle Game",
        "Code": "idle-game"
    },
    {
        "Name": "FPS",
        "Code": "fps"
    },
    {
        "Name": "Battle Royale",
        "Code": "battle-royale"
    },
    {
        "Name": "Sci-Fi",
        "Code": "sci-fi"
    },
    {
        "Name": "Fantasy",
        "Code": "fantasy"
    },
    {
        "Name": "Racing",
        "Code": "racing"
    },
    {
        "Name": "Breeding",
        "Code": "breeding"
    },
    {
        "Name": "Action",
        "Code": "action"
    },
    {
        "Name": "VR",
        "Code": "vr"
    },
    {
        "Name": "Adventure",
        "Code": "adventure"
    },
    {
        "Name": "RPG",
        "Code": "rpg"
    },
    {
        "Name": "Move To Earn",
        "Code": "move-to-earn"
    },
    {
        "Name": "Space Game",
        "Code": "space-game"
    },
    {
        "Name": "Card Game",
        "Code": "card-game"
    },
    {
        "Name": "Simulation",
        "Code": "simulation"
    },
    {
        "Name": "Virtual-World",
        "Code": "virtual-world"
    },
    {
        "Name": "Base Building",
        "Code": "base-building"
    },
    {
        "Name": "Collectible",
        "Code": "collectible"
    },
    {
        "Name": "Minigame",
        "Code": "minigame"
    },
    {
        "Name": "Football Game",
        "Code": "football-game"
    },
    {
        "Name": "Turn-based Strategy",
        "Code": "turn-based-strategy"
    },
    {
        "Name": "PVP",
        "Code": "pvp"
    },
    {
        "Name": "Strategy",
        "Code": "strategy"
    },
    {
        "Name": "MMO",
        "Code": "mmo"
    },
    {
        "Name": "Other",
        "Code": "other"
    }
]

const flatformList = [
    {
        "Name": "Browser",
        "Code": "browser"
    },
    {
        "Name": "Mobile",
        "Code": "mobile"
    },
    {
        "Name": "Windows",
        "Code": "windows"
    },
    {
        "Name": "Android",
        "Code": "android"
    },
    {
        "Name": "iOS",
        "Code": "ios"
    },
    {
        "Name": "PC",
        "Code": "pc"
    },
    {
        "Name": "Mac",
        "Code": "mac"
    },
    {
        "Name": "Linux",
        "Code": "linux"
    }
]
export {
    blockChains,
    genresList,
    flatformList
}