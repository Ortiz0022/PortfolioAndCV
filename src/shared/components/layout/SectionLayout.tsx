interface SectionLayoutProps {
  id?: string;
  children: React.ReactNode;
}

export default function SectionLayout({ id, children }: SectionLayoutProps) {
  return (
    <section id={id} className="min-h-screen flex items-center px-6 py-16 border border-gray">
      <div className="max-w-6xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
}