define([
    'uiElement',
    'Inevix_Todo/js/action/item/status',
    'Inevix_Todo/js/action/item/text',
    'Inevix_Todo/js/action/item/remove'
], (uiElement, todoItemActionUpdateStatus, todoItemActionUpdateText, todoItemActionRemove) => {
    'use strict';

    return uiElement.extend({
        defaults: {
            modules: {
                listComponent: 'todo.list'
            },
            tracks: {
                itemStatus: true,
                editState: true,
                textInput: true
            },
            listens: {
                itemStatus: 'onStatusUpdated'
            }
        },

        onStatusUpdated(status) {
            todoItemActionUpdateStatus(this.item.id, status);
        },

        onTextUpdated() {
            this.editState = false;

            if (!this.textInput) {
                this.textInput = this.item.text;
            }

            this.item.text = this.textInput;
            todoItemActionUpdateText(this.item.id, this.item.text);
        },

        remove() {
            todoItemActionRemove(this.item.id);
            this.listComponent().removeChild(this);
        }
    });
});
