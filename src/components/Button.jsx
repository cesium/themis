import Link from 'next/link'
import clsx from 'clsx'

export function Button({ href, className, ...props }) {
  className = clsx(
    'inline-flex justify-center rounded-2xl p-4 text-base font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
    className,
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
