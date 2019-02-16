modules.define('schedule', ['i-bem-dom', 'checkbox'], function(provide, bemDom, Checkbox) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this._events(this.findChildBlock(Checkbox))
                    .on({ modName : 'checked', modVal : '*' }, this._onCheckboxCheck());
            }
        }
    }
}));

});
