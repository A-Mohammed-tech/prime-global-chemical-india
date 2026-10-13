import ContentTag from './ContentTag.jsx';

export default function SectionHeading({ title, intro, tag, onDark = false, className = '' }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {tag && <ContentTag kind={tag} onDark={onDark} className="mb-5" />}
      <h2
        className={`text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl ${
          onDark ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${onDark ? 'text-slate-300' : 'text-slate-600'}`}>{intro}</p>
      )}
    </div>
  );
}
