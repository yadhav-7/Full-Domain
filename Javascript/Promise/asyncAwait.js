async function datas() {
    return new Promise((res, rej) => {
        let status = false
        setTimeout(() => {
            if (status) {
                res('success')
            } else {
                rej('falied')
            }
        }, 2000)
    })
}

async function getData() {
    try {
        let res = await datas()
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}
getData()
