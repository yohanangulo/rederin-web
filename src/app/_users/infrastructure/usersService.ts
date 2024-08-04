import { UserDTO } from '@/users/infrastructure/dto/user'
import { User } from '../domain/user'

export async function listUsers() {
  const response = await fetch('https://rederin-api.vercel.app/api/users')

  const users = (await response.json()) as User[]

  return users
}

export async function deleteUser(id: string) {
  await fetch(`https://rederin-api.vercel.app/api/users/${id}`, {
    method: 'DELETE',
  })
}
