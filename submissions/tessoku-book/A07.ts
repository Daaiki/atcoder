import { readFileSync } from 'fs'

const main = (arg: string) => {
  const args = arg.trim().split('\n')
}

main(readFileSync('/dev/stdin', 'utf-8'))