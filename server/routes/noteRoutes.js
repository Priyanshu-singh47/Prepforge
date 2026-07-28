const express=require("express");
const router=express.Router();

const protect=require("../middleware/authMiddleware");
const validate=require("../middleware/validate");

const {
createNoteSchema,
updateNoteSchema,
}=require("../validators/noteValidator");

const {
getNotes,
createNote,
updateNote,
deleteNote,
getQuestionNote,
saveQuestionNote,
}=require("../controllers/noteController");

router.use(protect);

router.route("/")
.get(getNotes)
.post(validate(createNoteSchema),createNote);

router.route("/question/:questionId")
.get(getQuestionNote)
.post(saveQuestionNote);

router.route("/:id")
.put(validate(updateNoteSchema),updateNote)
.delete(deleteNote);

module.exports=router;