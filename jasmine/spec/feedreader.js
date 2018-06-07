/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* First test suite */
    describe('RSS Feeds', function() {
       
         /* first spec check that 
         each feed is defined and it's length > 0 */ 
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* second spec check that
        each url is defined and it's length > 0 */
        it('Url is Defined and not Empty', function(){
           allFeeds.forEach( element => {
            expect(element.url).toBeDefined();
            expect(element.url.length).not.toBe(0);
           });
        });
        /* second spec check that
        each name is defined and it's length > 0 */
        it('Name is Defined and not Empty', function(){
            allFeeds.forEach( element => {
             expect(element.name).toBeDefined();
             expect(element.name.length).not.toBe(0);
            });
         });
    });
    /* second test suite */
    describe("The menu",function(){
        var menu = document.getElementsByClassName('menu-hidden');
        /* first spec check that menu is hidden by default */
        it('Menu is hidden by default',function(){
        expect(menu.length).not.toBe(0);
        });
        /* second spec check that menu is toggled when icon is pressed */
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
    /* third test suite checks 
     * that there is at least 1 entry */
    describe("Initial Entries",function(){
        beforeEach((done)=>{
            loadFeed(0,done);
        });
        it ("Contain at least one entry",function(done){
            var feed = document.querySelector(".feed");
            expect(feed.children.length).toBeGreaterThan(0);
            done();
        });


    });
    /* fourth test suite 
     * check that each feed is different than
     * the other one */
    
   describe("New Feed Selection", function(){
    var firstFeed,secondFeed;
    beforeEach((done)=>{
        loadFeed(0,function(){
            firstFeed = document.querySelector('.feed').innerHTML;
            loadFeed(1,function(){
                secondFeed = document.querySelector('.feed').innerHTML;
                done();
            });
        });
    });
    it("make Sure that Content actually changes",function(done){
        expect(firstFeed).not.toEqual(secondFeed);
        done();
    });
   });
   

}());
