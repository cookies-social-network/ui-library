import { ChangeEventHandler, forwardRef } from 'react'

import { DEFAULT_ACCEPT } from '@/packages/upload/constants'
import { IUploadProps } from '@/types/upload'

export const CnUpload = forwardRef<HTMLDivElement, IUploadProps>(function CnUpload(props, ref) {
  const {
    multiple = false,
    accept = DEFAULT_ACCEPT,
    onChange,
  } = props

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = event.target.files
    console.log(files)

    onChange?.(files)
  }

  return (
    <div data-tid={'cn-upload'} ref={ref}>
      <input type={'file'} multiple={multiple} accept={accept} onChange={onChangeHandler} />
    </div>
  )
})
