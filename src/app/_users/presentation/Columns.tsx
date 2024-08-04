'use client'

import { ColumnDef } from '@tanstack/react-table'
import { User } from '@/app/_users/domain/user'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
import { ArrowUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

dayjs.locale('es')

export const columns: ColumnDef<User>[] = [
  {
    size: 2,
    accessorKey: 'tracked',
    header: 'En excel',
  },
  {
    size: 2,
    accessorKey: 'username',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Usuario
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  { accessorKey: 'mkName', header: 'Mikrotik' },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Fecha
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell({ row }) {
      const date1 = dayjs(row.getValue('createdAt'))
      const date2 = dayjs()

      const months = date2.diff(date1, 'month')
      const adjustedDate1 = date1.add(months, 'month')
      const days = date2.diff(adjustedDate1, 'day')

      return `${dayjs(row.getValue('createdAt')).format('DD-MMM-YYYY')} - (${months > 0 ? `${months} meses ` : ''}${days} días)`
    },
  },
]
