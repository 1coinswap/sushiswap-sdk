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
  [ChainId.COINNET]: '0xf98AB03aEC2608682840Ca716f9f288D8D85Da86',
  [ChainId.ROPSTEN]: '0x4ECD805288f6fEc6fCF5F0c335AfCA220903b433',
  [ChainId.RINKEBY]: '0x12465A85BB5e33080B5fe87eef4Ad12cEda50eF9',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0x02918C57DE1b94bA27f2e240F429fFd532345962',
  [ChainId.MATIC_TESTNET]: '0x140EA2bafef74b599d6b44DC03289A2c269F16fd',
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
  [ChainId.MAINNET]: '0x02918C57DE1b94bA27f2e240F429fFd532345962',
  [ChainId.COINNET]: '0xB7E6083730CE453dc02Ad8a45c55559d41b04Ac8',
  [ChainId.RINKEBY]: '0xAAe18D2aAE3e29807f1cC253474e70C6a4104015',
  [ChainId.ROPSTEN]: '0x689a77726aa69221535aEa36aA28278E531A8417',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0x78CafB62a6fEca4d54A0b86DDe23F5D1ee538246',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '0x33114f5d7866f277dC3F27F30bd4Fa6d1DBd3f0D',
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
  [ChainId.COINNET]: '0x4e80E02C1AB3F53bd064960fCD96d3786e88f00C',
  [ChainId.ROPSTEN]: '0x8d8a7fD5006bDe95edFA444C3ceA569d040F0eb0',
  [ChainId.RINKEBY]: '0x8f2CC89F0e800d4Da6Af076d8aaFBCae5d7C5Be2',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0x2277e104DF9c97b2525C18FB9bcE9B99E98Efd83',
  [ChainId.MATIC_TESTNET]: '',
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
  [ChainId.COINNET]: '0x712ab3AD4Eae26Dc91ef01ae588B9e8D05994F58',
  [ChainId.ROPSTEN]: '0xEa7239743F8f523162Ac2d80659aB6Dc41Bfb21D',
  [ChainId.RINKEBY]: '0x6218E538FC454f42207A0179770066e9927b4D65',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0xAf2AF70A36c3617843F69Ca372b83A57705E7b5F',
  [ChainId.MATIC_TESTNET]: '',
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
  [ChainId.COINNET]: '0x3D1E1baD5956abD67C671Cf07e4DAEF75D5Ec80E',
  [ChainId.ROPSTEN]: '0x8FEeE3C51EcD72f9605EEB376Dc33EcA8AccA0f1',
  [ChainId.RINKEBY]: '0xf8354a57110f7Fe49F9d381458Faa5F5B10Daf9f',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0xb9c1D81AC3654d23e46fD1414FEe3873b1fCa64B',
  [ChainId.MATIC_TESTNET]: '0x326a942069b847cba595822c5085A232f9c1D2b4',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '0xD625441E2CdAA85d4f84Ef3f1622116eDE10aA9F',
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
  [ChainId.COINNET]: '0x8cCc46C52bAc5a69aF2Ea41236379a932540B2E4',
  [ChainId.ROPSTEN]: '0x0747628CFd814CAD7E0aC8e85bfF25d9787F5a3B',
  [ChainId.RINKEBY]: '0x087E8400D9A14097bf9B0E94667BC68B8b869276',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0x3ee0F98D47dD38F353A6FC518b13AeF3D8A21396',
  [ChainId.MATIC_TESTNET]: '0x569ba1eCFF20EA8052548ECD417dbbbe765BB0be',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '0xE598784DB5C3900CBEb554228fF51BEF6A595FFc',
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
  [ChainId.COINNET]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0x526386C92CD54B8Fa326b4cB41c4500073abAB9C',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '0x526386C92CD54B8Fa326b4cB41c4500073abAB9C',
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
