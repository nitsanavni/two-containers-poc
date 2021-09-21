import meow from "meow";

const {
    flags: { waitForWriterIteration },
} = meow({
    importMeta: import.meta,
    flags: {
        waitForWriterIteration: { type: "string", default: "13" },
    },
});

console.log("waitForWriterIteration", waitForWriterIteration);

let i = 0;

while (true) {
    const curr = +String(await nothrow($`cat /vol-reader/file`));

    if (+waitForWriterIteration < curr) {
        console.log(`reader found our ${curr}! iteration ${i}`);
        process.exit(0);
    }

    await sleep(40);

    i++;
}
