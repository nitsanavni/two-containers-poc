import meow from "meow";
import _ from "lodash";

const {
    flags: { loopUpTo },
} = meow({
    importMeta: import.meta,
    flags: {
        loopUpTo: { type: "string", default: "15" },
    },
});

await $`mkdir -p /vol`;
await $`rm -rf /vol/*`;

for (let i = 0; i < +loopUpTo; i++) {
    await sleep(100);

    console.log(`iteration ${i}`);

    await $`echo ${i} > /vol/file`;

    const { stderr } = await nothrow($`cat /vol/reader-done`);

    if (_.isEmpty(stderr)) {
        console.log(`reader is done, I'm at ${i}`);
        await $`cat /vol/file`;
        process.exit();
    }
}
