var config = {};
config.mongo = {};

config.mongo.port = process.env.npm_package_config_mgport || 27017;
config.mongo.host = process.env.npm_package_config_mghost || "127.0.0.1";
config.mongo.prefix = process.env.npm_package_config_mgprefix || "";
config.mongo.db = process.env.npm_package_config_mgdbname || "music-quizzDB"

module.exports = config;
