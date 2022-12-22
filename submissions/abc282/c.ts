import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [N, S] = [+args[0], args[1].split('')]

  let flag = false
  for (let i = 0; i < N; i++) {
    if (S[i] === '"') {
      flag = !flag
      continue
    }

    if (flag) continue

    if (S[i] === ',') S[i] = '.'
  }


  console.log(S.join(''))
}

main(readFileSync('/dev/stdin', 'utf-8'))