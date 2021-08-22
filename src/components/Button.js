import React from "react"
import cn from "classnames"

function getPresetClassName({ preset, theme }) {
  switch (preset) {
    case 'outlined':
      return cn(
        'border-[2px]',
        theme === 'dark'
          ? 'text-like-cyan-light border-like-cyan-light'
          : 'text-dark-gray border-dark-gray'
      )
    case 'filled':
      return 'text-like-green border-[2px] border-like-cyan-light bg-like-cyan-light'
    default:
    case 'white':
      return theme === 'dark' ? 'text-white' : 'text-dark-gray'
    case 'plain':
      return 'text-like-cyan-light'
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
    'rounded-[12px]',
    'text-center',
    'font-600',
    'leading-normal',
    'cursor-pointer',
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
