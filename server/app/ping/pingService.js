const execAsync = (require('bluebird')).promisify(require("child_process").exec);

function ping(ipPattern) {
    const indexes = ipPattern.split("").reduce((arr, item, index) => {
        if (item === '*') {
            arr.push(index);
        }
        return arr;
    }, []);


    let startIp = ipPattern.replace('*', '1');
    const ips = [];
    for (let i = 0; i < 254 * indexes.length; i++) {
        let currIndex = i % 254 === 0 ? indexes[indexes.length - 1 - i / 254] : currIndex;
        ips.push(`%`)
    }

    return ips;
    // [...Array(256).keys()].map(v =>
    //     let p = ips.map(ip => {
    //         execAsync(ip, (error, stdout, stderr) => {
    //             if (error) {
    //                 return { ip, ok: false, error };
    //             }
    //             console.log(`stdout: ${stdout}`);
    //             console.log(`stderr: ${stderr}`);
    //             return { ip, ok: true }
    //         })
    //     });
    // return await Promise.all(p);
}

module.exports = ping;