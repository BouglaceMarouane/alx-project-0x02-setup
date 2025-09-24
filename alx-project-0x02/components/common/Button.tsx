import React from 'react'
import { type ButtonProps } from '@/interfaces'

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  shape = "rounded-md",
  children,
  onClick,
  className = "",
}) => {

  // map size prop to Tailwind classes 
  const sizeClass = (() => {
    switch (size) {
      case "small":
        return "px-2 py-1 text-sm";
      case "large":
        return "px-6 py-3 text-lg";
      case "medium":
      default:
        return "px-4 py-2 text-base";
    }
  })()

  // shape directly maps
  const shapeClass = shape  // e.g. "rounded-sm", etc

  const baseClasses = "bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${sizeClass} ${shapeClass} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
