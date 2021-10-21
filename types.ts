const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello Typescript'

const numberArray: number[] = [1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 1, 2, 4]
const word: string[] = ['Hello', "Typescript"]

// Tuple
const contact: [string, number] = ['tel', 123456789]

// Any
let variable: any = 412
variable = []

// ===
function syMyName(name: string): void {
  console.log(name)
}

syMyName('Valeriya')

// Never
function throwError(message: string): never {
  throw new Error(message)
}

function infinite(): never {
  while (true) {

  }
}

// Type
type Login = string

const login: Login = 'admin'
// const login2: Login = 2

type ID = string | number
const id1: ID = 1234
const id2: ID = 'id'
// const id3: ID = true

type SomeType = string | null | undefined
