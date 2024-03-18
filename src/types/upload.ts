export interface IUploadProps {
  value?: FileList | null
  multiple?: boolean
  accept?: string

  onChange?: (files: FileList | null) => void
}
