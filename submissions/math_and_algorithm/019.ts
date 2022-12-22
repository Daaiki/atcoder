import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [N, ...A] = args.flatMap(line => line.split(' ').map(x => +x))

  const counts: {[key in number]: number} = {
    1: 0,
    2: 0,
    3: 0
  }
  for (let i = 0; i < N; i++) counts[A[i]]++
  
  let ans = 0
  for (let i = 1; i <= 3; i++) {
    ans += counts[i]*(counts[i]-1) / 2
  }

  console.log(ans)
}

main(readFileSync('/dev/stdin', 'utf-8'))