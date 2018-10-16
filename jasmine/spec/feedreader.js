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

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });

}());