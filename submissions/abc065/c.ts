import { readFileSync } from 'fs'

const main = (arg: string) => {
  const S = arg.trim()
  let sortedS = S.split('').reverse().join('')

  const dream = 'maerd'
  const dreamer = 'remaerd'
  const erase = 'esare'
  const eraser = 'resare'

  while (S.length) {
    const index = sortedS.indexOf(dream || dreamer || erase || eraser)
    if (index !== -1)  {
      sortedS = sortedS.substring(index, S.length)
    } else{ 
      console.log('No')
      return
    }
  }

  console.log('Yes')
}

main(readFileSync('/dev/stdin', 'utf-8'))