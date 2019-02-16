block('schedule').elem('search-form').replace()(function () {
    return [
        {
            block: 'checkbox',
            mods: {
                theme: 'islands',
                size: 'l'
            },
            name: 'delayed_only',
            val: true,
            text: 'Только задержанные рейсы'
        },
        {
            block: 'form',
            mix: { block: this.block, elem: this.elem },
            content: [
                {
                    block: 'control-group',
                    content: [
                        {
                            block: 'input',
                            mods: { theme: 'islands', size: 'l', 'has-clear': true, type: 'search' },
                            name: 'flight-number',
                            placeholder: 'Номер рейса'
                        },
                        {
                            block: 'button',
                            mods: {
                                type: 'submit',
                                theme: 'islands',
                                size: 'l'
                            },
                            text: 'Найти'
                        }
                    ]
                },
                {
                    block: 'spin',
                    mods: { theme: 'islands', size: 's' }
                }
            ]
        }
    ];
});
