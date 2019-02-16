block('schedule')(
    js()(true),

    content()(function() {
        let data = this.data;

        return [
            {
                elem: 'schedule-types'
            },
            {
                elem: 'search-form'
            }
        ];
    })
);
