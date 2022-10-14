import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg.trim()
  let ans = 'No'

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      if (i * j === N) ans = 'Yes'
    }
  }

  console.log(ans)
} 

main(readFileSync('/dev/stdin', 'utf-8'))