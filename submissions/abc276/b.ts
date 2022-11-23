import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[N, M], ...AandB] = args.map(line => line.split(' ').map(x => +x))

  let count: string[] = Array.from({ length: N }).map(_ => '')
  for (let i = 0; i < M; i++) {
    count[AandB[i][0] - 1] += AandB[i][1] + ' '
    count[AandB[i][1] - 1] += AandB[i][0] + ' '
  }
  let ans: string[] = Array.from({ length: N }).map(_ => '')
  for (let i = 0; i < N; i++) {
    ans[i] = [Array.from(new Set(count[i].split(' '))).length - 1, Array.from(new Set(count[i].split(' ').sort((a, b) => parseInt(a) - parseInt(b)))).join(' ')].join(' ')
  }
  console.log(ans.join('\n'))
}

main(readFileSync('/dev/stdin', 'utf-8'))