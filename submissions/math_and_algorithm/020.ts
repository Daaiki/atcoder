import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [N, ...A] = args.flatMap(line => line.split(' ').map(x => +x))

  let ans = 0
  for (let i = 0; i < N; i++) {
    for (let j = i+1; j < N; j++) {
      for (let k = j+1; k < N; k++) {
        for (let l = k+1; l < N; l++) {
          for (let m = l+1; m < N; m++) {
            A[i]+A[j]+A[k]+A[l]+A[m] === 1000 && ans++
          }
        }
      } 
    }
  }
  
  console.log(ans)
}


main(readFileSync('/dev/stdin', 'utf-8'))