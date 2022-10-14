import { readFileSync } from 'fs'

const main = (arg: string) => {
  const N = +arg.trim()
  let ans = 'No'

  for (let i = 0; 4*i <= N; i++) {
    for (let j = 0; 7*j+4*i <= N; j++) {
      if (4*i + 7*j === N) ans = 'Yes'
    }
  }

  console.log(ans)
} 

main(readFileSync('/dev/stdin', 'utf-8'))