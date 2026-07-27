const Subject=require("../models/Subject");
const Topic=require("../models/Topic");
const Question=require("../models/Question");
const Note=require("../models/Note");

const pages=[
  {
    title:"Dashboard",
    path:"/",
    type:"Page",
  },
  {
    title:"Subjects",
    path:"/subjects",
    type:"Page",
  },
  {
    title:"Planner",
    path:"/planner",
    type:"Page",
  },
  {
    title:"Notes",
    path:"/notes",
    type:"Page",
  },
  {
    title:"Bookmarks",
    path:"/bookmarks",
    type:"Page",
  },
  {
    title:"Progress",
    path:"/progress",
    type:"Page",
  },
  {
    title:"Settings",
    path:"/settings",
    type:"Page",
  },
];


const globalSearch=async(req,res)=>{

  const {query}=req.query;

  if(!query || !query.trim()){
    return res.json({
      results:[]
    });
  }


  const search=query.trim();


  try{

    const pageResults=pages.filter(page=>
      page.title
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )
    );


    const [
      subjects,
      topics,
      questions,
      notes
    ]=await Promise.all([


      Subject.find({
        $or:[
          {
            name:{
              $regex:search,
              $options:"i"
            }
          },
          {
            shortName:{
              $regex:search,
              $options:"i"
            }
          }
        ]
      }).limit(5),



      Topic.find({
        name:{
          $regex:search,
          $options:"i"
        }
      })
      .populate(
        "subject",
        "_id"
      )
      .limit(5),



      Question.find({
        title:{
          $regex:search,
          $options:"i"
        }
      })
      .populate({
        path:"topic",
        populate:{
          path:"subject",
          select:"_id"
        }
      })
      .limit(5),



      Note.find({
        title:{
          $regex:search,
          $options:"i"
        }
      })
      .limit(5)

    ]);



    const dbResults=[


      ...subjects.map(item=>({
        _id:item._id,
        title:item.name,
        type:"Subject",
        path:`/subjects/${item._id}`,
      })),


      ...topics.map(item=>({
        _id:item._id,
        title:item.name,
        type:"Topic",
        path:item.subject
          ? `/subjects/${item.subject._id}/topics/${item._id}`
          : null,
      })),


      ...questions.map(item=>({
        _id:item._id,
        title:item.title,
        type:"Question",
        path:item.topic?.subject
          ? `/subjects/${item.topic.subject._id}/topics/${item.topic._id}/questions/${item._id}`
          : null,
      })),


      ...notes.map(item=>({
        _id:item._id,
        title:item.title,
        type:"Note",
        path:"/notes",
      }))

    ];



    res.json({
      results:[
        ...pageResults,
        ...dbResults,
      ]
    });


  }
  catch(error){

    console.error(error);

    res.status(500).json({
      message:"Search failed"
    });

  }

};


module.exports={
  globalSearch
};