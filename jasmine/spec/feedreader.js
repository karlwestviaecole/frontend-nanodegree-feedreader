$(function () {

    /* 'RSS Feed' suite contains tests for the
     * allFeeds collection and its items.
     */
    describe('RSS Feeds', function () {

        /* 'are defined' tests to make sure that the allFeeds
         *  variable is defined and not empty.
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* 'should have url' tests that each item in allFeeds
         * has a url property that is not empty.
         */
        it('should have url', function () {
            for (let feedItem of allFeeds) {
                expect(feedItem.url).toBeDefined();
                expect(typeof feedItem.url).toBe('string');
                expect(feedItem.url.length).toBeGreaterThan(0);
            }
        });

        /* 'should have name' tests that each item in allFeeds
         * has a name property that is not empty.
         */
        it('should have name', function () {
            for (let feedItem of allFeeds) {
                expect(feedItem.name).toBeDefined();
                expect(typeof feedItem.name).toBe('string');
                expect(feedItem.name.length).toBeGreaterThan(0);
            }
        });
    });

    /* 'The menu' suite contains tests for the
     * menu behaviour.
     */
    describe('The menu', function () {

        /* 'should be hidden' tests that the menu is
         * hidden by default.
         */
        it('should be hidden', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* 'should change visibility when menu-item-link clicked'
         * tests that the visibility of the menu is toggled
         * when the menu icon is clicked.
         */
        it('should change visibility when menu-item-link clicked', function () {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* The 'Initial Entries' suite contains tests for the
     * inital state of the feed when loadFeed has been called.
     */
    describe('Initial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        /* 'should not be empty' tests that there are at least
         * one entry in the feed when loadFeed has been called.
         */
        it('should not be empty', function (done) {
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);
            done();
        });

    });

    /* The 'New Feed Selection' suite contains tests for the
     * state of the feed when loadFeed is called repeatedly.
     */
    describe('New Feed Selection', function () {

        var initialFeedContent;
        var newFeedContent;

        beforeEach(function (done) {
            loadFeed(1, function () {
                initialFeedContent = $('.feed').text();
                loadFeed(0, function () {
                    newFeedContent = $('.feed').text();
                    done();
                });
            });
        });

        /* 'should change content' tests that the content of
         * the feed is changed when a new feed is loaded.
         */
        it('should change content', function (done) {
            expect(initialFeedContent).not.toEqual(newFeedContent);
            done();
        });
    });

}());