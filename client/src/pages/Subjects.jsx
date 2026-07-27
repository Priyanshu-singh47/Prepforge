import { useEffect, useMemo, useState } from "react";

import SubjectGrid from "../components/Subjects/SubjectGrid";
import SubjectSearch from "../components/Subjects/SubjectSearch";

import api from "../services/api";


function Subjects() {

  const [subjects, setSubjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);



  useEffect(() => {

    const fetchSubjects = async () => {

      try {

        const { data } = await api.get("/subjects");

        setSubjects(data);

      } catch (error) {

        console.error("Failed to fetch subjects:", error);

      } finally {

        setLoading(false);

      }

    };


    fetchSubjects();

  }, []);




  const filteredSubjects = useMemo(() => {

    const query = searchTerm.trim().toLowerCase();


    return subjects
      .filter((subject) => {

        if (!query) return true;


        return (
          subject.name.toLowerCase().includes(query) ||
          subject.shortName.toLowerCase().includes(query)
        );

      })
      .sort((a,b)=>{

        if(b.progress !== a.progress){

          return b.progress - a.progress;

        }

        return b.solved - a.solved;

      });


  }, [subjects, searchTerm]);





  if(loading){

    return (

      <div className="flex h-96 items-center justify-center">

        <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
          Loading subjects...
        </p>

      </div>

    );

  }





  return (

    <div className="space-y-8">


      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">


        <div>


          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Subjects
          </h1>



          <p className="mt-2 text-gray-500">
            Choose a subject to explore topics and solve questions.
          </p>



          <p className="mt-3 text-sm text-gray-400">

            {filteredSubjects.length}{" "}

            {filteredSubjects.length === 1
              ? "Subject"
              : "Subjects"
            }

          </p>


        </div>




        <SubjectSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />



      </div>




      <SubjectGrid subjects={filteredSubjects} />


    </div>

  );

}


export default Subjects;