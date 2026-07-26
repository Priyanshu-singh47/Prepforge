const introduction = require("./introduction");
const erModel = require("./erModel");
const relationModel = require("./relationModel");
const keys = require("./keys");
const normalization = require("./normalization");
const sql = require("./sql");
const joins = require("./joins");
const transactions = require("./transactions");
const concurrencyControl = require("./concurrencyControl");
const indexing = require("./indexing");
const views = require("./views");
const storedProcedures = require("./storedProcedures");
const noSql = require("./noSql");

module.exports = {
    "Introduction to DBMS": introduction,
    "ER Model": erModel,
    "Relational Model": relationModel,
    "Keys": keys,
    "Normalization": normalization,
    "SQL Fundamentals": sql,
    "Joins": joins,
    "Transactions": transactions,
    "Concurrency Control": concurrencyControl,
    "Indexing": indexing,
    "Views": views,
    "Stored Procedures & Triggers": storedProcedures,
    "NoSQL Basics": noSql,
};