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
      return 'bg-like-cyan-light text-like-green'
    default:
    case 'white':
      return theme === 'dark' ? 'text-white' : 'text-dark-gray'
    case 'plain':
      return 'text-like-cyan-light'
  }
}

export default function Button({ 
  className: classNameProp,
  preset = 'plain',
  theme = 'dark',
  isNoPadding = '',
  children, 
  ...props
}) {
  const className = cn([
    'block',
  
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

  return (
    <a
      className={className}
      {...props}
    >
      {children}
    </a>
  )
}
