block('page-index').content()(function() {
    let data = this.data;

    return data.hello + ' ' + data.world;
});