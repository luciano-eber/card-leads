export function diffNumberForHumans(value) {

  if(typeof value === 'string')
    value = parseInt(value)

  if(typeof value !== 'number') {
    console.error('insira um número ou string')
    return null
  }

  if (value >= 1000000000)
    return (value / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G'

  if (value >= 1000000) 
    return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'

  if (value >= 1000)
    return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")

  return value.toString()
}