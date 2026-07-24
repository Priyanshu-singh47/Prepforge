function StatisticRow({
  icon: Icon,
  label,
  value,
  iconBg,
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-100 p-3">

      <div className="flex items-center gap-2">

        <div
          className={`flex h-8 w-8 items-center justify-center rounded-lg ${iconBg}`}
        >
          <Icon
            size={16}
            className="text-white"
          />
        </div>

        <span className="text-sm font-medium text-gray-700">
          {label}
        </span>

      </div>

      <span className="text-sm font-semibold text-gray-900">
        {value}
      </span>

    </div>
  );
}

export default StatisticRow;