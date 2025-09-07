import s from './TestInput.module.scss'
import type { TestInputProps } from './TestInput.props'

export function TestInput({}: TestInputProps) {
  return (
    <div className={s.TestInput}>
      <div>TestInput</div>
    </div>
  )
}
