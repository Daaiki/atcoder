import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [arg1, ...arg2] = arg.trim().split('\n')
  const [H, W] = arg1.split(' ').map(x => +x)
  const C = arg2.map(line => line.split(''))

  let ans = []

  for (let i = 0; i < W; i++) {
    let counter = 0
    for (let j = 0; j < H; j++) {
      if (C[j][i] === '#') counter++
    }
    ans.push(counter)
  }

  console.log(ans.join(' '))
}

main(readFileSync('/dev/stdin', 'utf-8'))