function QuestionFilter({
  filter,
  setFilter,
  questions,
}) {

  const total = questions.length;

  const solved = questions.filter(
    (q)=>q.status==="Done"
  ).length;

  const unsolved = total - solved;


  const filters=[
    {
      label:"All",
      count:total,
    },
    {
      label:"Solved",
      count:solved,
    },
    {
      label:"Unsolved",
      count:unsolved,
    },
  ];


  return (

    <div className="flex items-center gap-3">

      {filters.map((item)=>(

        <button
          key={item.label}
          onClick={()=>setFilter(item.label)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            filter===item.label
            ?"bg-blue-600 text-white"
            :"border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          }`}
        >

          {item.label} ({item.count})

        </button>

      ))}

    </div>

  );
}

export default QuestionFilter;