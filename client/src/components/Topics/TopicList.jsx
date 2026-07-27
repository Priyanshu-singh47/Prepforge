import TopicCard from "./TopicCard";

function TopicList({ topics }) {

  if (topics.length === 0) {

    return (
      <div className="flex h-72 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800">

        <div className="text-center">

          <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
            No topics found
          </h3>


          <p className="mt-2 text-sm text-gray-500">
            Try searching with a different keyword.
          </p>


        </div>

      </div>
    );

  }


  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

      {topics.map((topic)=>(

        <TopicCard
          key={topic._id}
          topic={topic}
        />

      ))}

    </div>
  );
}

export default TopicList;