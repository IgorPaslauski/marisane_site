type Props = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

const SectionHeader = ({ title, subtitle, align = "center" }: Props) => {
  const alignCls = align === "center" ? "text-center" : "text-left";
  const wrapCls = align === "center" ? "mx-auto" : "";
  return (
    <div className={`${alignCls} mb-16`}>
      <h2 className="text-4xl font-bold text-gray-800 mb-6">{title}</h2>
      {subtitle && <p className={`text-xl text-gray-600 max-w-3xl ${wrapCls}`}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
