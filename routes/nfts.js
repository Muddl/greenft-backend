const dbConn = require('../dbconnection');
const TABLE_NAME = "NFT";

const getAllNfts = async () => {
    const params = {
        TableName: TABLE_NAME,
    }
    const nfts = await dbConn.scan(params).promise();
    return nfts;
};

const getPageOfNfts = async (pageNum, limit) => {
    const params = {
        TableName: TABLE_NAME,
        Limit: limit,
    }
};

module.exports = { getAllNfts, getPageOfNfts };