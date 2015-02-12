Template.sectionLesson.helpers({
    'courseID': function () {
        /*
        * Return the course ID
        * for use in routes, etc.
        */

        // This is not currently in use.

        // return course ID from course template
        // the course template is multiple levels above
        // the course section template
        //return Template.parentData(2)._id;
    }
});

Template.sectionLesson.events({
    'click .lesson-link': function (event) {
        event.preventDefault();

        // set clicked lesson ID as active
        Session.set('activeLesson', this._id);
    }
});