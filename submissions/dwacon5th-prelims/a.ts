import { readFileSync } from 'fs'

const main = (arg: string) => {
  const [arg1, arg2] = arg.trim().split('\n')
  const N = +arg1
  const a = arg2.split(' ').map(x => +x)

  const average = a.reduce((sum, x) => sum += x) / N

  const datas = [...a.map((x, index) => ({abs: Math.abs(x - average), index}))]
  const sortedDatas = datas.sort((a, b) => a.abs - b.abs)
  const mins = sortedDatas.filter(data => data.abs === datas[0].abs)
  const sortedByIndex = mins.sort((a, b) => a.index - b.index)

  console.log(sortedByIndex[0].index)
}

main(readFileSync('/dev/stdin', 'utf-8'))
