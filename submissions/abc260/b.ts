import { readFileSync } from 'fs'

type Data = {
  index: number
  math: number
  english: number
  total: number
}

const main = (arg: string) => {
  const [arg1, arg2, arg3] = arg.trim().split('\n')

  const [N, X, Y, Z] = arg1.split(' ').map(x => +x)
  const A = arg2.split(' ').map(x => +x)
  const B = arg3.split(' ').map(x => +x)

  const ans = []
  
  let data = createData(A, B)
  
  // sort by math
  data = data.sort((a, b) => customSort(a, b, 'math'))
  for (let i = 0; i < X; i++) ans.push(data[i].index)
  data.splice(0, X)
  
  // sort by english
  data = data.sort((a, b) => customSort(a, b, 'english'))
  for (let i = 0; i < Y; i++) ans.push(data[i].index)
  data.splice(0, Y)
  
  // sort by total
  data = data.sort((a, b) => customSort(a, b, 'total'))
  for (let i = 0; i < Z; i++) ans.push(data[i].index)
  data.splice(0, Z)
  
  console.log(ans.sort((a, b) => a - b).join('\n'))
}

const createData = (A: number[], B: number[]) => {
  let obj: Data[] = []

  for (let i = 0; i < A.length; i++) {
    const mathPoint = A[i]
    const englishPoint = B[i]

    obj[i] = {
      index: i + 1,
      math: mathPoint,
      english: englishPoint,
      total: mathPoint + englishPoint
    }
  }

  return obj
}

const customSort = (a: Data, b: Data, key: keyof Data) => {
  if (a[key] === b[key]) return a.index - b.index

  return b[key] - a[key]
}

main(readFileSync('/dev/stdin', 'utf-8'))