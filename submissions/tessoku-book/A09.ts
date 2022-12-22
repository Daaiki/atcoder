import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [[H, W, N], ...ABCD] = args.map(line => line.split(' ').map(x => +x))

  const updowns: number[][] = [...Array(H+1)].map(_ => Array(W+1).fill(0))
  for (let i = 0; i < N; i++) {
    const [A, B, C, D] = ABCD[i]

    updowns[A-1][B-1]++, updowns[C][D]++
    updowns[C][B-1]--, updowns[A-1][D]--
  }

  const ans: number[][] = accumulates(H, W, updowns)
  ans.shift()
  for (let i = 0; i < H; i++) {
    ans[i].shift()
  }

  console.log(ans.map(line => line.join(' ')).join('\n'))
}

const accumulates = (row: number, column: number, matrix: number[][]): number[][] => {
  const sum = [...Array(row + 1)].map(() => Array(column + 1).fill(0))

  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= column; j++) {
      sum[i][j] = sum[i][j - 1] + sum[i - 1][j] - sum[i-1][j-1] + matrix[i - 1][j - 1]
    }
  }

  return sum
}

main(readFileSync('/dev/stdin', 'utf-8'))