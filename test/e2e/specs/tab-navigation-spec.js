'use strict';

var NavigationBar = require('./navigation-bar');
var navigationBar = new NavigationBar();

browser.get('http://localhost:9000');

describe('The page navigation bar', function() {

    beforeEach(function() {
        navigationBar.clickPage('Page 2');
    });

    it('navigates to the appropriate url', function() {
        expect(browser.getLocationAbsUrl()).toContain('page-2');
    });

    it('shows the selected page', function() {
        expect(element(by.className('page-title')).getText()).toBe('Page 2');
    });

    it('highlights the page\'s tab that is currently being viewed', function() {
        expect(element(by.className('active')).getText()).toBe('Page 2');
    });
});