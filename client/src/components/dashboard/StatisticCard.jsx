function StatisticCard({
  icon: Icon,
  value,
  label,
  subtitle,
  iconBg,
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      <div
        className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBg}`}
      >
        <Icon className="h-5 w-5 text-white" />
      </div>

      <div className="mt-3">

        <h3 className="text-xl font-bold text-gray-900">
          {value}
        </h3>

        <p className="text-sm font-medium text-gray-700">
          {label}
        </p>

        <p className="text-xs text-gray-500">
          {subtitle}
        </p>

      </div>

    </div>
  );
}

export default StatisticCard;