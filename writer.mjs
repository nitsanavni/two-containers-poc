import meow from "meow";

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
    await $`echo ${i} > /vol/file`;
}

await $`cat /vol/file`;
