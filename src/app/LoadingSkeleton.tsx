import { Skeleton } from '@/components/ui/skeleton'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'

const LoadingSkeleton = () => {
  const rows = Array.from({ length: 20 })
  const columns = Array.from({ length: 4 })

  return (
    <>
      <div className="py-10">
        <div className="flex items-center py-4">
          <Skeleton className="h-10 w-full max-w-sm" />
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((_, i) => (
                  <TableHead key={i}>
                    <Skeleton className="h-4 w-full" />
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((_, i) => (
                <TableRow key={i}>
                  {columns.map((_, i) => (
                    <TableCell key={i}>
                      <Skeleton className="h-4 w-full px-2" />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default LoadingSkeleton
