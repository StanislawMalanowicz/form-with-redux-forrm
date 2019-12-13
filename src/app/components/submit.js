//  export const submit = (values, data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(values)
//             // data.addData(values)
//             resolve()
//         }, 2000)
//     })
//   };

//   export default submit



export const submit = formData => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('formData: ', formData.password);

    //   For validation page
      if (formData.password && "666" === formData.password) {
        reject({
          password: "Slayer!!! pass"
        });
      }


      // ... do stuff;

      resolve();
    }, 2000);
  });
};

export default submit;
