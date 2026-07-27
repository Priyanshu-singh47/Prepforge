import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

function PlannerCalendar() {

  const [currentMonth, setCurrentMonth] =
    useState(new Date());


  const days = [
    "S",
    "M",
    "T",
    "W",
    "T",
    "F",
    "S",
  ];


  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();


  const monthName = currentMonth.toLocaleString(
    "default",
    {
      month: "long",
    }
  );


  const firstDay = new Date(
    year,
    month,
    1
  ).getDay();


  const totalDays = new Date(
    year,
    month + 1,
    0
  ).getDate();



  const dates = useMemo(() => {

    const cells = [];

    for(let i = 0; i < firstDay; i++){
      cells.push(null);
    }

    for(let i = 1; i <= totalDays; i++){
      cells.push(i);
    }

    return cells;

  },[firstDay,totalDays]);



  const today = new Date();



  return (

    <div className="h-[348px] rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">


      <div className="mb-4 flex items-center justify-between">


        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {monthName} {year}
        </h2>



        <div className="flex gap-1">


          <button
            onClick={() =>
              setCurrentMonth(
                new Date(year, month - 1, 1)
              )
            }
            className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
          >

            <ChevronLeft size={17}/>

          </button>



          <button
            onClick={() =>
              setCurrentMonth(
                new Date(year, month + 1, 1)
              )
            }
            className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
          >

            <ChevronRight size={17}/>

          </button>


        </div>


      </div>





      <div className="mb-3 grid grid-cols-7 text-center text-xs font-medium text-gray-400">

        {days.map((day,index)=>(

          <div key={index}>
            {day}
          </div>

        ))}

      </div>





      <div className="grid grid-cols-7 gap-y-2">


        {dates.map((date,index)=>(

          date ? (

            <button
              key={index}
              className={`mx-auto flex h-9 w-9 items-center justify-center rounded-lg text-sm transition ${
                today.getDate() === date &&
                today.getMonth() === month &&
                today.getFullYear() === year

                ? "bg-blue-600 text-white"

                : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >

              {date}

            </button>


          ) : (

            <div key={index}/>

          )

        ))}


      </div>


    </div>

  );

}

export default PlannerCalendar;