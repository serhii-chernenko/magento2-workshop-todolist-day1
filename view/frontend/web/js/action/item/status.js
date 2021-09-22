define(['Inevix_Todo/js/model/list'], function (todoListModel) {
    'use strict';

    return function (id, status) {
        const list = todoListModel.get();
        const index = list.findIndex(item => item.id === id);

        list[index].status = status;

        return todoListModel.set(list);
    };
});
