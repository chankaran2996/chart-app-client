import { LoaderIcon } from 'lucide-react'
import React from 'react'

const PageLoading = () => {
  return (
    <div
    className=' flex items-center justify-center h-screen'
    >
        <LoaderIcon className='animate-spin size-10' />
    </div>
  )
}

export default PageLoading