let i = 0;

while (true) {
    if (/13/.test(String(await nothrow($`cat /vol/file`)))) {
        console.log(`reader found our 13! iteration ${i}`);
        process.exit(0);
    }
    await sleep(40);
    i++;
}
