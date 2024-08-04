import * as usersService from '@/app/_users/infrastructure/usersService'
import { User } from '@/app/_users/domain/user'

export async function listUsers(): Promise<User[]> {
  try {
    const res = await usersService.listUsers()

    return res
  } catch (e) {
    throw e
  }
}
