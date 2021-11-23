import React from "react"
import cn from "classnames"

function getPresetClassName({ preset, theme }) {
  switch (preset) {
    case 'outlined':
      return cn(
        'border-[2px]',
        'hover:text-opacity-70',
        'active:text-opacity-50',
        theme === 'dark'
          ? 'text-like-cyan-light border-like-cyan-light'
          : 'text-dark-gray border-medium-gray'
      )
    case 'filled':
      return 'text-like-green border-[2px] border-like-cyan-light bg-like-cyan-light hover:bg-opacity-70 active:bg-opacity-50'
    default:
    case 'white':
      return cn(theme === 'dark' ? 'text-white' : 'text-dark-gray', 'hover:text-like-cyan')
    case 'plain':
      return 'text-like-cyan-light hover:text-opacity-70 active:text-opacity-50'
    case 'disabled':
    return 'text-medium-gray border-[2px] border-medium-gray bg-shade-gray pointer-events-none '
  }
}

const Button = React.forwardRef(({ 
  className: classNameProp,
  preset = 'plain',
  theme = 'dark',
  isNoPadding = '',
  children, 
  ...props
}, ref) => {
  const className = cn([
    'block',
    'transition',
    'transition-colors',
    'rounded-[12px]',
    'text-center',
    'font-600',
    'leading-normal',
    getPresetClassName({ preset, theme }),
    classNameProp,
    {
      'px-[16px] py-[10px]': !isNoPadding,
    }
  ])

  const Tag = props.href ? 'a' : 'button'

  return (
    <Tag
      ref={ref}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  )
})

export default Button
