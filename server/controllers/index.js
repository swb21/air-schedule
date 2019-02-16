let Render = require('../render'),
    render = Render.render;

function getContent(req, res) {
    const query = req.query || {};
    const scheduleType = query['type'] || 'departures';

    let hello = 'Hello';
    let world = 'World';
    console.log('-------------------------------');
    console.log(scheduleType);
    console.log('-------------------------------');
    render(req, res, {
        view: 'page-index',
        title: 'Авиа.Табло',
        meta: {
            description: 'Приложения, которое показывает расписание рейсов какого-то аэропорта',
            og: {
                siteName: 'Авиа.Табло'
            }
        },
        hello: hello,
        world: world
    });
}

module.exports = {
    getContent
};