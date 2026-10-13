const VARIANTS = {
  light: 'bg-white text-navy-900 hover:bg-brand-ice focus-visible:outline-white',
  dark: 'bg-navy-900 text-white hover:bg-navy-700',
  glass: 'glass-dark text-white hover:bg-white/15',
  outline: 'border border-navy-900/20 text-navy-900 hover:border-navy-900 hover:bg-navy-900/5',
};

/** Renders an <a> when `href` is given, otherwise a <button>. */
export default function Button({ href, variant = 'dark', className = '', children, ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${VARIANTS[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
