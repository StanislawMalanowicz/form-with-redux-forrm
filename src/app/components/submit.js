 const submit = (values, data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(values)
            // data.addData(values)
            resolve()
        }, 2000)
    })
  };

  export default submit
