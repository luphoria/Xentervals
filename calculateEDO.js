const cents = (step, steps) => {
    return step * (1200 / steps);
}

// CalculateEDO calculates the cent values in an EDO.
// Input: Integer (number of steps in EDO)
// Output: Array [Float] of cent values
export const CalculateEDO = (steps) => {
    let res = [];
    for (let step = 1; step < steps; step++) {
        res.push(cents(step, steps));
    }
    return res;
}