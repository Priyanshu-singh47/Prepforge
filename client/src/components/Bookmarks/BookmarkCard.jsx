import {
  Bookmark,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../../services/api";


function BookmarkCard({
  bookmark,
  onRefresh,
}) {

  const question = bookmark.question;


  const difficultyColors = {

    Easy: "bg-green-100 text-green-700",

    Medium: "bg-yellow-100 text-yellow-700",

    Hard: "bg-red-100 text-red-700",

  };



  const handleRemoveBookmark = async (e) => {

    e.preventDefault();

    e.stopPropagation();


    try {


      await api.patch(

        `/questions/${question._id}/bookmark`,

        {
          isBookmarked:false,
        }

      );


      toast.success(
        "Bookmark removed"
      );


      onRefresh();


    }
    catch(err){


      console.error(err);


      toast.error(
        "Failed to remove bookmark"
      );


    }

  };



  return (

    <Link

      to={`/subjects/${question.topic.subject._id}/topics/${question.topic._id}/questions/${question._id}`}

      className="group relative block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"

    >



      <button

        type="button"

        onClick={handleRemoveBookmark}

        className="absolute right-4 top-4 rounded-full p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"

      >


        <Bookmark

          size={18}

          className="fill-blue-600 text-blue-600"

        />


      </button>





      <div className="pr-8">


        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">

          {question.title}

        </h2>



        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">

          {question.topic.subject.shortName ||
            question.topic.subject.name}

          {" • "}

          {question.topic.name}


        </p>


      </div>





      <div className="mt-5 flex items-center justify-between">



        <span

          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            difficultyColors[question.difficulty]
          }`}

        >

          {question.difficulty}


        </span>





        <div className="flex items-center gap-2 text-sm">


          {
            bookmark.status==="Done" ? (

              <>

                <CheckCircle2

                  size={18}

                  className="text-green-600"

                />


                <span className="text-green-600">

                  Solved

                </span>


              </>


            ) : (

              <>

                <Circle

                  size={18}

                  className="text-gray-400"

                />


                <span className="text-gray-500 dark:text-gray-400">

                  {bookmark.status}

                </span>


              </>


            )

          }


        </div>


      </div>


    </Link>

  );

}


export default BookmarkCard;