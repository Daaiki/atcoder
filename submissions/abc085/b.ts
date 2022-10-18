import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [N, ...d] = arg.trim().split('\n').map(x => +x)

  const ans = new Set(d).size
  
  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))