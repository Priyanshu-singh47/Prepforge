require("dotenv").config();

const connectDB = require("../config/db");

const Subject = require("../models/Subject");
const Topic = require("../models/Topic");
const Question = require("../models/Question");
const Resource = require("../models/Resource");

const subjects = require("../data/subjects/defaultSubject");
const defaultTopics = require("../data/topics/defaultTopics");
const resources = require("../data/resources");
const allQuestions = require("../data/question");

const seedDatabase = async () => {
    try {

        await connectDB();

        // =====================
        // Delete Existing Data
        // =====================

        await Question.deleteMany();
        await Resource.deleteMany();
        await Topic.deleteMany();
        await Subject.deleteMany();

        console.log("Old data deleted");

        // =====================
        // Seed Subjects
        // =====================

        const createdSubjects = await Subject.insertMany(subjects);

        console.log(`Subjects seeded (${createdSubjects.length})`);

        // =====================
        // Seed Topics
        // =====================

        const topicDocs = [];

        for (const subjectData of defaultTopics) {

            const subject = createdSubjects.find(
                (s) => s.name === subjectData.subject
            );

            if (!subject) {
                console.log(`Subject not found: ${subjectData.subject}`);
                continue;
            }

            for (const topic of subjectData.topics) {

                topicDocs.push({
                    subject: subject._id,
                    name: topic.name,
                    description: topic.description,
                    icon: topic.icon,
                    order: topic.order,
                    estimatedQuestions: topic.estimatedQuestions,
                });

            }

        }

        await Topic.insertMany(topicDocs);

        console.log(`Topics seeded (${topicDocs.length})`);

        // =====================
        // Seed Resources
        // =====================

        const resourceDocs = [];

        for (const [subjectName, subjectResources] of Object.entries(resources)) {

            const subject = createdSubjects.find(
                (s) => s.name === subjectName
            );

            if (!subject) {
                console.log(`Subject not found for resources: ${subjectName}`);
                continue;
            }

            for (const resource of subjectResources) {

                resourceDocs.push({
                    subject: subject._id,
                    title: resource.title,
                    platform: resource.platform,
                    url: resource.url,
                });

            }

        }

        await Resource.insertMany(resourceDocs);

        console.log(`Resources seeded (${resourceDocs.length})`);

       // =====================
// Seed Questions
// =====================

const createdTopics = await Topic.find();

const questionDocs = [];

for (const [topicName, questions] of Object.entries(allQuestions)) {

    if (!Array.isArray(questions)) {
        console.log(`${topicName} is not exporting an array`);
        continue;
    }

    const topic = createdTopics.find(
        (t) => t.name === topicName
    );

    if (!topic) {
        console.log(`Topic not found: ${topicName}`);
        continue;
    }

    for (const question of questions) {

        questionDocs.push({
            topic: topic._id,
            title: question.title,
            difficulty: question.difficulty,
            pattern: question.pattern || "",
            source: question.source,
            article: question.article,
            practice: question.practice,
            order: question.order,
        });

    }

}

await Question.insertMany(questionDocs);

console.log(`Questions seeded (${questionDocs.length})`);

        console.log("Database seeded successfully!");

        process.exit(0);

    } catch (error) {

        console.error("Seeding Error:", error);
        process.exit(1);

    }
};

seedDatabase();