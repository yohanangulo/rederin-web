import { UserDTO } from '@/users/infrastructure/dto/user'
import UserCard from '@/users/presentation/UserCard'

import * as usersRepository from '@/app/_users/infrastructure/usersRepository'
import { DataTable } from '@/app/_users/presentation/DataTable'
import { columns } from '@/app/_users/presentation/Columns'

export default async function Home() {
  return (
    <section className="container mx-auto max-w-5xl py-20">
      <h1 className="text-2xl font-bold">Usuarios Red</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UsersTable />
      </Suspense>
    </section>
  )
}

import React, { Suspense } from 'react'

async function UsersTable() {
  const users = await usersRepository.listUsers()

  users.reverse()

  return (
    <div className="py-10">
      <DataTable columns={columns} data={users} />
    </div>
  )
}
