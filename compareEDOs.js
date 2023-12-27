// CompareEDOs compares any list of supplied EDOs.
// There can be any number of EDOs supplied in the
// input, and it will compare all to each other.
// Input:
// {
//   "edo name": [Numbers: scale degrees in cents]
// }
// Type errorMargin: number in cents of proximity to log
// Output:
// {
//   "edo name": {
//     "step number": { // note that not all step numbers will be returned
//       interval: "step number\\edo name",
//       diff: Float difference between this edo's step and the other interval
//     }
//   }
// }
export const CompareEDOs = (EDOs, errorMargin) => {
  let res = {};
  for (let edo1 in EDOs) {
    // For each edo
    res[edo1] = {};
    for (let edo2 in EDOs) {
      // compare to all edos
      if (edo1 !== edo2) {
        // except itself
        for (let i in EDOs[edo1]) {
          // For each scale degree in EDO 1
          for (let j in EDOs[edo2]) {
            // loop each scale degree in EDO 2
            if (Math.abs(EDOs[edo1][i] - EDOs[edo2][j]) < errorMargin) {
              // and if they are less than 10c apart
              res[edo1][(parseInt(i) + 1).toString()] = {
                // add it to the response
                interval: `${parseInt(j) + 1}\\${edo2}`,
                diff: Math.round((EDOs[edo1][i] - EDOs[edo2][j]) * 1000) / 1000,
              };
              // console.log(
              //   // log it
              //   `${parseInt(i) + 1}\\${edo1} is ${
              //     Math.round((EDOs[edo1][i] - EDOs[edo2][j]) * 1000) / 1000
              //   }c from ${parseInt(j) + 1}\\${edo2}.`
              // );
            }
          }
        }
      }
    }
  }
  return res;
};
