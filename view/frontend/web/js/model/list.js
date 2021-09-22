define([], function () {
    'use strict';

    return {
        set(list) {
            return localStorage.setItem('todo', JSON.stringify(list));
        },

        get() {
            const list = localStorage.getItem('todo');

            if (list) {
                return JSON.parse(list);
            }

            this.set([]);

            return [];
        }
    };
});
