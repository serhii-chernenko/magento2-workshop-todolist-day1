define(['Inevix_Todo/js/model/list'], function (todoListModel) {
    'use strict';

    return function (id) {
        return todoListModel.set(todoListModel.get().filter(item => item.id !== id));
    };
});
