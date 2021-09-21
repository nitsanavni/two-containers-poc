$`mkdir -p /vol`;
$`rm -rf /vol/*`;

for (let i = 0; i < 15; i++) {
    await sleep(100);
    await $`echo ${i} >> /vol/file`;
}

await $`cat /vol/file`;
