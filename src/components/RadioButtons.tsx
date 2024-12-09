import { twMerge } from 'tailwind-merge'

interface IRadioButtonsProps {
  sizes: string[]
  selected: string
  setSelected: (value: string) => void
  className?: string
}
// TODO radio buttons check styles
const RadioButtons = ({
  sizes,
  selected,
  setSelected,
  className,
}: IRadioButtonsProps) => {
  return (
    <div>
      <ul className="inline-flex flex-wrap gap-x-2.5 gap-y-1">
        {sizes.map((size) => (
          <li key={size} className={twMerge('', className)}>
            <label className="flex cursor-pointer items-center gap-1">
              <input
                className="m-0 checked:accent-red-50"
                type="radio"
                name="size"
                value={size}
                checked={selected === size}
                onChange={(e) => setSelected(e.target.value)}
              />
              <span className="font-medium">{size}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RadioButtons
