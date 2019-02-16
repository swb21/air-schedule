block('form')(
    tag()('form'),
    addJs()(true),
    addAttrs()(function() {
        let ctx = this.ctx;

        return {
            method: ctx.method,
            action: ctx.action || '/'
        };
    })
);
