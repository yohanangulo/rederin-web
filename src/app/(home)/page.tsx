import { Suspense } from 'react'
import * as usersRepository from '@/app/_users/infrastructure/usersRepository'
import { DataTable } from '@/app/_users/presentation/DataTable'
import { columns } from '@/app/_users/presentation/Columns'

import LoadingSkeleton from '../LoadingSkeleton'

export default async function Home() {
  return (
    <section className="container mx-auto max-w-5xl py-20">
      <h1 className="text-2xl font-bold">Usuarios Red</h1>
      <Suspense fallback={<LoadingSkeleton />}>
        <UsersTable />
      </Suspense>
    </section>
  )
}

async function UsersTable() {
  const users = await usersRepository.listUsers()

  users.reverse()

  return (
    <div className="py-10">
      <DataTable columns={columns} data={users} />
    </div>
  )
}

export const dynamic = 'force-dynamic'
