block('schedule').elem('schedule-types').content()(function() {
    return [
        {
            block: 'button',
            mods: {
                type: 'link',
                theme: 'islands',
                size: 'l'
            },
            url: '/?type=departures',
            text: 'Отправления'
        },
        {
            block: 'button',
            mods: {
                type: 'link',
                theme: 'islands',
                size: 'l'
            },
            url: '/?type=arrivals',
            text: 'Прибытия'
        }
    ]
});
