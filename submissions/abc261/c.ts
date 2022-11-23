import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
  const [N, ...S] = args.map(x => x)

  let dic: Record<typeof S[number], number> = {}
  let ans: string[] = []

  for (let i = 0; i < +N; i++) {
    if (dic.hasOwnProperty(S[i])) dic[S[i]]++, ans[i] = `${S[i]}(${dic[S[i]]})`
    else dic[S[i]] = 0, ans[i] = S[i]
  }

  console.log(ans.join('\n'))
}

main(readFileSync('/dev/stdin', 'utf-8'))