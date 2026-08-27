const mongoose = require("mongoose");
const dns = require("dns");

const dnsServers = process.env.MONGODB_DNS_SERVERS
    ?.split(",")
    .map((server) => server.trim())
    .filter(Boolean);

if (dnsServers?.length) {
    dns.setServers(dnsServers);
}

const connectDB = async () => {

    try {

        const connection = await mongoose.connect(
            process.env.MONGODB_URI
        );

        console.log(
            `MongoDB Connected: ${connection.connection.host}`
        );

    } catch (error) {

        console.error(
            `MongoDB Connection Error: ${error.message}`
        );

        process.exit(1);

    }

};

module.exports = connectDB;