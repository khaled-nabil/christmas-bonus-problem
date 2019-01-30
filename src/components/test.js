import React from 'react'

/*function findSubset(numbers, target) {
    let last = numbers.length - 1;
    if (target === 0)
        return true;
    else if (numbers.length === 0 && target !== 0)
        return false;
    else if (numbers[last] > target)
        return findSubset(numbers.splice(-1), target);
    else {
        let newTarget = target - numbers[last];
        return findSubset(numbers.splice(-1), target) || findSubset(numbers.splice(-1), newTarget);
    }
}*/
function findSubset(numbers,n, target) {
    if (target === 0)
        return true;
    else if (n === 0 && target !== 0)
        return false;
    else if (numbers[n-1] > target)
        return findSubset(numbers,n-1, target);
    else {
        let newTarget = target - numbers[n];
        return findSubset(numbers, n-1, target) || findSubset(numbers,n-1, newTarget);
    }
}

function subsetSum(numbers, target, partial) {
    let found = false;

    function recursive(numbers, target, partial) {
        let s, n, remaining;

        partial = partial || [];

        // sum partial
        s = partial.reduce(function (a, b) {
            return a + b;
        }, 0);

        // check if the partial sum is equals to target
        if (s === target) {
            console.log("%s=%s", partial.join("+"), target);
            found = true;
            return true;
        }

        if (s >= target) {
            return true;  // if we reach the number why bother to continue
        }

        for (let i = 0; i < numbers.length; i++) {
            n = numbers[i];
            remaining = numbers.slice(i + 1);
            recursive(remaining, target, partial.concat([n]));
            if (found) {
                break;
            }
        }
        return found;
    }

    return recursive(numbers, target, partial);
}

const Test = (props) => {
    let results = props.test;
    let rows = [];
    for (let rs of results) {
        if (rs[1].length > 1) {
           // rows.push(<p key={rs[0]}>{subsetSum(rs[1], rs[0]) ? "true" : "false"} {rs[0]} {rs[1].join("\t")}</p>);
            rows.push(<p key={rs[0]}>{findSubset(rs[1], rs[1].length, rs[0]) ? "true" : "false"} {rs[0]} {rs[1].join("\t")}</p>);
        }
    }
    return <div>{rows}</div>;

};
export default Test
