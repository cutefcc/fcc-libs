'use strict';
const data: string = '我是core';
type DemoData = {
    userId: number;
    user: string;
    error: null | Error;
};
const normalTask = new Promise<DemoData>((resolve, reject) => {
    setTimeout(() => {
        if (data === 'cheche') {
            resolve({
                userId: 12,
                user: 'string',
                error: null,
            })
        } else {
            reject({
                userId: 0,
                user: 'string',
                error: new Error('test'),
            })
        }
    })
})
export {
    normalTask,
    DemoData
};

