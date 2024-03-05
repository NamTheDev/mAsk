const { readdirSync } = require("fs");
const { join } = require("path");

const handlerFiles = readdirSync('handlers')
for (const file of handlerFiles) {
    require(join(process.cwd(), 'handlers', file))
}
