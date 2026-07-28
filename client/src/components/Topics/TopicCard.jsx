import { ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

function TopicCard({ topic }) {
  const { subjectId } = useParams();

  return (
    <Link
      to={`/subjects/${subjectId}/topics/${topic._id}`}
      className="group block rounded-xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
    >

      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
        {topic.name}
      </h3>


      <div className="mt-2 flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">

        <span>
          <span className="font-semibold text-gray-900 dark:text-white">
            {topic.solved}
          </span>{" "}
          Solved
        </span>


        <span>
          <span className="font-semibold text-gray-900 dark:text-white">
            {topic.totalQuestions}
          </span>{" "}
          Questions
        </span>

      </div>



      <div className="mt-3 sm:mt-4">

        <div className="mb-2 flex items-center justify-between">

          <span className="text-xs text-gray-500">
            Progress
          </span>


          <div className="flex items-center gap-2 sm:gap-4">

            <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
              {topic.progress}%
            </span>


            <span className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold text-blue-600 transition-colors duration-200 group-hover:text-blue-700">
              Continue
              <ArrowRight size={14} className="sm:hidden"/>
              <ArrowRight size={16} className="hidden sm:block"/>
            </span>

          </div>

        </div>


        <div className="h-1.5 sm:h-2 rounded-full bg-gray-200 dark:bg-gray-700">

          <div
            className="h-1.5 sm:h-2 rounded-full bg-blue-600 transition-all duration-500"
            style={{
              width: `${topic.progress}%`,
            }}
          />

        </div>


      </div>

    </Link>
  );
}

export default TopicCard;