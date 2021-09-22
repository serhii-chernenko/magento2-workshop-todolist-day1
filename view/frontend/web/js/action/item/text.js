define(['Inevix_Todo/js/model/list'], function (todoListModel) {
    'use strict';

    return function (id, text) {
        const list = todoListModel.get();
        const index = list.findIndex(item => item.id === id);

        list[index].text = text;

        return todoListModel.set(list);
    };
});
