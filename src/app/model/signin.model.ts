export interface SignInData {
  email: string,
  password: string,
}

export interface User {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  address: {
    street: string,
    city: string,
    state: string,
    zip: string
  },
  phoneNumber: number
}
