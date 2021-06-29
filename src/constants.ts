import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  COINNET = 85,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  MATIC = 137,
  MATIC_TESTNET = 80001,
  FANTOM = 250,
  FANTOM_TESTNET = 4002,
  XDAI = 100,
  BSC = 56,
  BSC_TESTNET = 97,
  ARBITRUM = 79377087078960,
  MOONBASE = 1287,
  AVALANCHE = 43114,
  FUJI = 43113,
  HECO = 128,
  HECO_TESTNET = 256,
  HARMONY = 1666600000,
  HARMONY_TESTNET = 1666700000,
  OKEX = 66,
  OKEX_TESTNET = 65
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const INIT_CODE_HASH: string = '0xf3c28ca4e78e014705cf96cabc9a197b8dda79238992091d514406728c8ce407'

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeB12D6937D8Afd2E38b5A4DBf01258Bbe0D85F43',
  [ChainId.COINNET]: '0xaae1B402F3891d35aC760F5c088C50D78e3662CE',
  [ChainId.ROPSTEN]: '0xe3B2430Bb2D361De1568B58Fcb70Db83AE3b128a',
  [ChainId.RINKEBY]: '0x66BC40e8fbB3679908D2B600706836d917033176',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '0xeB12D6937D8Afd2E38b5A4DBf01258Bbe0D85F43',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0x9A73212fa5FAD9d35E06556b5F63C7e93764A697',
  [ChainId.MATIC_TESTNET]: '0xC46B343aB156c17C2a37B3c349045f767a593e39',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '0xe54C718319aF4a973D1A4de24e43f68aCbC28359',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xe54C718319aF4a973D1A4de24e43f68aCbC28359',
  [ChainId.COINNET]: '0x234874A627f22bdDc714f914c8a6781D48267B94',
  [ChainId.RINKEBY]: '0x9c7D46D4A62fD7cF0cAe413ce74f152861DBB2f8',
  [ChainId.ROPSTEN]: '0x7Ae73841Ce87b875193E458f54d57d7B7a5D6Cc7',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '0x90d62e06b711be223E79b9065eD52f1f2eE2db26',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0x4ce332ef50bfCFa614C44DEB30ee11183ca2520d',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '0x18dd45896Aa1B5c09E29D65060b44493C985B8c6',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const SUSHI_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.COINNET]: '0x2f1189b8CB615e299C495056B69daa2EeE311788',
  [ChainId.ROPSTEN]: '0x6E4E818ea15c712D6Fb95496762EA4324eA78084',
  [ChainId.RINKEBY]: '0xc5E27dA5c79d714db4441ec752A9E0Acf653a0d5',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '0x02918C57DE1b94bA27f2e240F429fFd532345962',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0xc21d4C8F7Bb15F8B41BB086dd7f41dB839cE8206',
  [ChainId.MATIC_TESTNET]: '0x209c7980bf3d260f528848DAa6F9BCcA3D70B3B1',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '0xA1dc7ab8FA042E91ab771D6596a6E32baEc89F4d',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const MASTERCHEF_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.COINNET]: '0xa5D8458EA2f610e299814bB2A33a97c5c230aF66',
  [ChainId.ROPSTEN]: '0xcb6b43596c4bdE60A646897ec53c4E2666B84741',
  [ChainId.RINKEBY]: '0x34F4f7AA0BA4e63F7c5A5E7117716d54ebc64124',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '0x78CafB62a6fEca4d54A0b86DDe23F5D1ee538246',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0x4547714988FF0923682DbdC64C6C440d2db8434F',
  [ChainId.MATIC_TESTNET]: '0xd015e6cD5F921d1a1C9c06750c958095E6a005E4',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '0x66bF3F0f012959ac65Ca81D2e033Cc42D139DA80',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const BAR_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.COINNET]: '0x57Cc0E3D77514DD314D9e7318934c051C9108CFb',
  [ChainId.ROPSTEN]: '0x3B9D49AA2168f12d9c311121bb8aD087385772ae',
  [ChainId.RINKEBY]: '0xf21307efa08F8EFf30AE4A8BfD4a2a84d8939963',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '0xf04Cc38c825aba63DC1BbA7a5655Bc65a34E2bf9',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0xD3ee9911f89651eA092768380B959CD3585576f4',
  [ChainId.MATIC_TESTNET]: '0x699FBf3F6a4c5d398687f5b4c8563a324EFe2F5C',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '0x77490cD34CE8D7B720507090877FDc8d1fc2cD4E',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const MAKER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.COINNET]: '0x7B2390db2616A2aD7961DdCC0A4b2A8528695833',
  [ChainId.ROPSTEN]: '0xC1b7F2d3Bbd402A2862666c77378d41A153eE1AC',
  [ChainId.RINKEBY]: '0xf5bf8a05664412a7117e686AAEAABd80Ed00e2D8',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '0x2277e104DF9c97b2525C18FB9bcE9B99E98Efd83',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0xA9E8e5c5C8666e20C058b4B14d0F480f033a5b7B',
  [ChainId.MATIC_TESTNET]: '0x41f70D64D26Ba8a5Ec2518BD469C55f8b1b67c8B',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '0x2065C639EdFfb8d94B877bbd1099f0EcE89090DE',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const TIMELOCK_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.COINNET]: '0xBb44fC618a06fF32189Fb78556AB12F281e0d792',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
