'use strict';
import core from '@fcc/core';
import {useImmer} from '@fcc/hooks';
console.log(core)
console.log(useImmer)

const normalTask = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('normal task')
    }, 1000)
})


