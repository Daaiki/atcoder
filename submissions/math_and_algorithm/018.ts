import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [N, ...A] = args.flatMap(line => line.split(' ').map(x => +x))

  const counts: {[key in number]: number} = {
    100: 0,
    200: 0,
    300: 0,
    400: 0
  }

  for (let i = 0; i < N; i++) counts[A[i]]++
  
  console.log(counts[100]*counts[400] + counts[200]*counts[300])
}

main(readFileSync('/dev/stdin', 'utf-8'))