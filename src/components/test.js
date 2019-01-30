import React from 'react'

function findSubset(numbers, target, next) {
    if (target === 0) //target has been reached
        return true;
    else if (next === 0 && target !== 0) //no subset can be equal to the target
        return false;
    else if (numbers[next-1] > target) //if the current last value is bigger than the sum so far, then skip to next one
        return findSubset(numbers,next-1, target);
    else { //branch out to find next different combos using the current value or not using it
        let newTarget = target - numbers[next-1];
        return findSubset(numbers, next-1, target) || findSubset(numbers,next-1, newTarget);
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
            rows.push(<p key={rs[0]}>{findSubset(rs[1], rs[0], rs[1].length) ? "true" : "false"} {rs[0]} {rs[1].join("\t")}</p>);
        }
    }
    return <div>{rows}</div>;

};
export default Test
