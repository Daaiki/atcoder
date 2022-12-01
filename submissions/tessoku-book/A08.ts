import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [H, W] = args[0].split(' ').map(x => +x)
  args.shift()
  const [X, Q, ABCD] = [args.splice(0, H).map(line => line.split(' ').map(x => +x)), +args.splice(0, 1), args.map(line => line.split(' ').map(x => +x))]

  const sums = accumulates(H, W, X)

  const ans: number[] = []
  for (let i = 0; i < Q; i++) {
    const [A, B, C, D] = ABCD[i]

    ans[i] = sums[C][D] - sums[A-1][D] - sums[C][B-1] + sums[A-1][B-1]
  }

  console.log(ans.join('\n'))
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