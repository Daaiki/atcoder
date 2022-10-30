import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [A, B] = arg.trim().split(' ').map(x => +x)

  const ans = (B / A).toFixed(3)
  
  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))