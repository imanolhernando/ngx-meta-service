# Meta Service


    constructor(private metaService: MetaService) {
        this.metaService.setMetaTags(
        'Title',
        'desc',
        'tags'
        );
    }