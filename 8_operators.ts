interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person

let key: PersonKeys = 'name'
key = 'age'

// key = 'job'

type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}

type UserkeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>
type UserkeysNoMeta_1 = Pick<User, 'name' | 'email'>

let user_1: UserkeysNoMeta = 'name'
// user_1 = '_id'