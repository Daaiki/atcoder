import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [N, ...a] = args.flatMap(line => line.split(' ').map(x => +x))

  let counter = 0
  for (let i = 0; i < N; i++) {
    if (a[a[i]-1] === i+1) counter++
  }

  console.log(counter/2)
}

main(readFileSync('/dev/stdin', 'utf-8'))