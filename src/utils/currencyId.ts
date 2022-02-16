import { Currency, ETHER, Token } from '@uniswap/sdk'
import { translateName } from '.'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return translateName('ETH')
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
