$`mkdir -p /tmp/vol`;
$`rm -rf /tmp/vol/*`;

for (let i = 0; i < 15; i++) {
    await sleep(100);
    await $`echo ${i} >> /tmp/vol/file`;
}
