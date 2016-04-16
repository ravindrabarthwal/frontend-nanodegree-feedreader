/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url are defined and not null',function() {
            //Loop through all the objects and check expectations
            //for each object
            var length = allFeeds.length;
            for(var i = 0; i < length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBeNull();
            }
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name are defined and not null',function() {
            //Loop through all the objects and check expectations
            //for each object
            var length = allFeeds.length;
            for(var i = 0; i < length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBeNull();
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* A test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            //check the body has class of menu-hidden
            //then expecting it to be true.
            var isHidden = $('body').hasClass('menu-hidden');
            expect(isHidden).toBe(true);
        });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when menu icon clicked', function() {
            //Toggle menu (showing, this time)
            $('body').toggleClass('menu-hidden');
            //expecting body don't have menu-hidden class
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
            //Toggle menu (hiding, this time)
            $('body').toggleClass('menu-hidden');
            //expecting that body has class menu-hidden
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done) {
            //loadFeed asynchronously and then test condition
            loadFeed(0, done);
         });

        it('must have a single .entry element', function(done) {
            //check if got .entry element
            var result = $('.entry').length ? true : false;
            //expecting the value to be true
            expect(result).toBe(true);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        beforeEach(function(done) {
            //loading different feeds asynchronously
            loadFeed(1, done);
        });

        it('on load changes content', function(done) {
            //getting the url of the blog post for the first feed item
            var url = $($('.entry-link')[0]).attr('href');
            //checking if url matches with css-tricks.com domain
            expect(url).toMatch("css-tricks.com");
            done();
        });

    });
}());
