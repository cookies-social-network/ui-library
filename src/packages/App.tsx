import { useRef, useState } from 'react'

import { CnInput, CnUpload } from '@/packages'

export const App = () => {
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)
  const fileRef = useRef<HTMLDivElement>(null)
  const [file, setFile] = useState<FileList | null>(null)

  return (
    <div>
      <h1
        onClick={() => {
          inputRef.current?.focus()
        }}
      >
        App
      </h1>

      <CnInput ref={inputRef} />

      <CnInput
        type={'textarea'}
        onChange={
          (event) => { 
            console.log(event.target.value)
        }
        }
      />

      <CnUpload value={file} ref={fileRef} onChange={(files) => setFile(files || null)} />
    </div>
  )
}
