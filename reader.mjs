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
    if (new RegExp(waitForWriterIteration).test(String(await nothrow($`cat /vol-reader/file`)))) {
        console.log(`reader found our ${waitForWriterIteration}! iteration ${i}`);
        process.exit(0);
    }
    await sleep(40);
    i++;
}
