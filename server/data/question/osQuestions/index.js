const introduction = require("./introduction");
const processesThreads = require("./processesThreads");
const cpuScheduling = require("./cpuScheduling");
const processSynchronization = require("./processSynchronization");
const deadlocks = require("./deadlocks");
const memoryManagement = require("./memoryManagement");
const fileSystems = require("./fileSystems");
const ioSystems = require("./ioSystems");
const storageManagement = require("./storageManagement");
const securityProtection = require("./securityProtection");

module.exports = {
    "Introduction to Operating Systems": introduction,
    "Processes & Threads": processesThreads,
    "CPU Scheduling": cpuScheduling,
    "Process Synchronization": processSynchronization,
    "Deadlocks": deadlocks,
    "Memory Management": memoryManagement,
    "File Systems": fileSystems,
    "I/O Systems": ioSystems,
    "Storage Management": storageManagement,
    "Security & Protection": securityProtection,
};