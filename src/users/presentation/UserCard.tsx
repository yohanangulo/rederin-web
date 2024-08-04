import dayjs from 'dayjs'
import 'dayjs/locale/es'

import { User } from '@/app/_users/domain/user'

dayjs.locale('es')
interface UserCardProps {
  users: User[]
}
export default function UserCard({ users }: UserCardProps) {
  return users.map(user => (
    <div key={user._id} className="flex gap-1">
      <p>{user.username}</p> - <p>{dayjs(user.createdAt).format('DD/MMM/YYYY h:mma')}</p>
    </div>
  ))
}
