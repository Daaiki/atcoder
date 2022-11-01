import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [N, A, B] = args.flatMap(line => line.split(' ').map(x => +x))
  const S = args[1].split('')

  let rankB = 1
  let counter = 0
  let ans: string[] = []
  for (let i = 0; i < N; i++) {
    if (S[i] === 'a' && counter < A + B) ans.push('Yes'), counter++
    else if (S[i] === 'b' && counter < A + B && B >= rankB) ans.push('Yes'), counter++, rankB++
    else ans.push('No')
  }

  console.log(ans.join('\n'))
}

main(readFileSync('/dev/stdin', 'utf-8'))