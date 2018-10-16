$(function () {

    describe('RSS Feeds', function () {

        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('should have url', function () {
            for (let feedItem of allFeeds) {
                expect(feedItem.url).toBeDefined();
                expect(typeof feedItem.url).toBe('string');
                expect(feedItem.url.length).toBeGreaterThan(0);
            }
        });

        it('should have name', function () {
            for (let feedItem of allFeeds) {
                expect(feedItem.name).toBeDefined();
                expect(typeof feedItem.name).toBe('string');
                expect(feedItem.name.length).toBeGreaterThan(0);
            }
        });
    });

    describe('The menu', function () {

        it('should be hidden', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('should change visibility when menu-item-link clicked', function () {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('should not be empty', function (done) {
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);
            done();
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */

}());