block('schedule').elem('schedule-types').content()(function() {
    const scheduleTypes = [
        {
            text: 'Отправления',
            url: '/?type=departures'
        },
        {
            text: 'Прибытия',
            url: '/?type=arrivals'
        }
    ];

    return scheduleTypes.map(function(type) {
        return {
            block: 'button',
            mods: {
                type: 'link',
                theme: 'islands',
                size: 'l'
            },
            text: type.text,
            url: type.url
        }
    });
});
