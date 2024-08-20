import { UserDTO } from '@/users/infrastructure/dto/user'
import { User } from '../domain/user'
import axios from 'axios'

export async function listUsers() {
  const { data: users } = await axios.get<User[]>('https://rederin-api.vercel.app/api/users')

  console.log(users.at(-1))

  return users
}

export async function deleteUser(id: string) {
  await fetch(`https://rederin-api.vercel.app/api/users/${id}`, {
    method: 'DELETE',
  })
}
