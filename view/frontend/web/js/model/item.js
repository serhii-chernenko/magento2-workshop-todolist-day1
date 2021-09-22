define([], function () {
    'use strict';

    return {
        generateId() {
            return `${Math.random().toString().substring(2)}_${new Date().getTime()}`;
        }
    };
});
