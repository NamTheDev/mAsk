const { readdirSync } = require("fs");
const { join } = require("path");

const handlerFiles = readdirSync('events')
for (const file of handlerFiles) {
    require(join(process.cwd(), 'events', file))
}
