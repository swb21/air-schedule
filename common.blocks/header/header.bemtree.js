block('header')({
    content: () => [
        {
            elem: 'layout',
            content: [
                {
                    block: 'logo',
                    mix: [
                        { block: 'header', elem: 'logo' },
                        { block: 'link' }
                    ]
                }
            ]
        }
    ]
});
