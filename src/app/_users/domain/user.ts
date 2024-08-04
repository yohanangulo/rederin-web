import { UserDTO } from '../infrastructure/dto/user'

export interface User {
  _id: string
  username: string
  tracked: boolean
  mkName: string
  mikrotikTime: string
  createdAt: Date
  updatedAt: Date
}
