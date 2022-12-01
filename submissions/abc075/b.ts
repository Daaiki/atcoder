import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [H, W] = args.map(line => line.split(' ').map(x => +x))
  args.shift()
  const S = args.map(line => line.split(''))

  for (let y = -1; y < 2; y++) {
    for (let x = -1; x < 2; x++) {
      if (S[y][x] === '.') {
        
      }
    }
  }

  
}

main(readFileSync('/dev/stdin', 'utf-8'))