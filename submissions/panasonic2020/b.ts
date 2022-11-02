import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [H, W] = arg.trim().split(' ').map(x => +x)

  if (H === 1 || W === 1) console.log(1)
  else if (H % 2 !== 0 && W % 2 !== 0) console.log(Math.ceil(H*W / 2))
  else console.log(H*W / 2)
}

main(readFileSync('/dev/stdin', 'utf-8'))