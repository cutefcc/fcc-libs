'use strict';
import core from '@fcc/core';
import {useImmer, d} from '@fcc/hooks';
console.log(core)
console.log(useImmer)
console.log(d())

const normalTask = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('normal task')
    }, 1000)
})


