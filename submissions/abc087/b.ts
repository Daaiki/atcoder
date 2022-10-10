import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [A, B, C, X] = arg.trim().split('\n').map(x => +x)
  let counter = 0;

  for (let i = 0; i <= A; i++) {
    for (let j = 0; j <= B; j++) {
      for (let k = 0; k <= C; k++) {
        500*i + 100*j + 50*k === X && counter++ 
      }
    }
  }

  console.log(counter)
} 

main(readFileSync('/dev/stdin', 'utf-8'))