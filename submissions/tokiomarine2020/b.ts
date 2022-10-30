import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [A, V, B, W, T] = args.flatMap(line => line.split(' ').map(x => +x))
  
  const distance = Math.abs(A - B)

  if (W*T+distance <= V*T) console.log('YES')
  else console.log('NO')
}

main(readFileSync('/dev/stdin', 'utf-8'))