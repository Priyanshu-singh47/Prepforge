const introduction = require("./introduction");
const osiModel = require("./osiModel");
const tcpIpModel = require("./tcpIpModel");
const physicalLayer = require("./physicalLayer");
const dataLinkLayer = require("./dataLinkLayer");
const networkLayer = require("./networkLayer");
const transportLayer = require("./transportLayer");
const sessionLayer = require("./sessionLayer");
const presentationLayer = require("./presentationLayer");
const applicationLayer = require("./applicationLayer");
const security = require("./security");
const networkTroubleshooting = require("./networkTroubleshooting");

module.exports = {
    "Introduction to Computer Networks": introduction,
    "OSI Model": osiModel,
    "TCP/IP Model": tcpIpModel,
    "Physical Layer": physicalLayer,
    "Data Link Layer": dataLinkLayer,
    "Network Layer": networkLayer,
    "Transport Layer": transportLayer,
    "Session Layer": sessionLayer,
    "Presentation Layer": presentationLayer,
    "Application Layer": applicationLayer,
    "Security": security,
    "Network Troubleshooting": networkTroubleshooting,
};