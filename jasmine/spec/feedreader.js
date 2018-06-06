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
         * page?*/
         
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('Url is Defined and not Empty', function(){
           allFeeds.forEach( element => {
            expect(element.url).toBeDefined();
            expect(element.url.length).not.toBe(0);
           });
        });

        it('Name is Defined and not Empty', function(){
            allFeeds.forEach( element => {
             expect(element.name).toBeDefined();
             expect(element.name.length).not.toBe(0);
            });
         });
    });

    describe("The menu",function(){
        var menu = document.getElementsByClassName('menu-hidden');
        it('Menu is hidden by default',function(){
        expect(menu.length).not.toBe(0);
        });
        
        it ('Click changes visibility',function()
        {
            $('.menu-icon-link').trigger("click");
            menu = document.getElementsByClassName('menu-hidden');
            expect(menu.length).toBe(0);
            $('.menu-icon-link').trigger("click");
            menu = document.getElementsByClassName('menu-hidden');
            expect(menu.length).not.toBe(0);
            
        });
    });

    describe("Initial Entries",function(){
        beforeEach((done)=>{
            loadFeed(0,function(){
                done();
            });
        });
        it ("Contain at least one entry",function(done){
            var feed = document.querySelector(".feed");
            expect(feed.children.length).toBeGreaterThan(0);
            done();
        });


    });
    
   describe("New Feed Selection", function(){
    var firstFeed;
    beforeEach((done)=>{
        loadFeed(0,function(){
            firstFeed = document.querySelector('.feed').innerHTML;
        });
        loadFeed(1,function(){
            done();
        });
    });
    it("make Sure that Content actually changes",function(done){
        expect(document.querySelector('.feed').innerHTML).not.toEqual(firstFeed);
        done();
    });
   });
   

}());
