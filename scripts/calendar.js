$(function() {
    var minDate = new Date('2019-02-10');
    var maxDate = new Date('2019-02-11');
    var scrollTime = moment().format("HH") + ":00:00";

    $("#schedule").fullCalendar({
        header: {
            left: 'title',
            center: '',
            right: 'prev, next',
        },

        defaultView: 'agendaDay',

        defaultDate: '2019-02-09',

        viewRender: function(view) {
            if(view.start < minDate) {
                $('#schedule').fullCalendar('gotoDate', minDate);
            }

            if (view.start > maxDate - 1) {
                $('#schedule').fullCalendar('gotoDate', maxDate);
            }
        },

        nowIndicator: true,

        scrollTime: scrollTime,
        
        allDaySlot: false,
        
        slotEventOverlap: false,

        slotDuration: '00:10:00',

        resources: [
            { id: 'at', title: 'Atrium' },
            { id: 'a', title: 'Classroom A' },
            { id: 'b', title: 'Classroom B' },
            { id: 'ac', title: 'Activity Room' },
            { id: 'r', title: 'REPF' }
        ],

        groupByDateAndResource: true,

        events: [
            {
                resourceIds: ['at', 'a', 'b'],
                title: 'Opening',
                start: '2019-02-09T11:00',
                end: '2019-02-09T11:30'
            },
            {
                resourceIds: ['at', 'a', 'b'],
                title: 'Hacking Starts',
                start: '2019-02-09T11:30',
                end: '2019-02-09T12:00'
            },
            {
                resourceIds: ['at', 'a', 'b'],
                title: 'Lunch',
                start: '2019-02-09T12:00',
                end: '2019-02-09T13:00'
            },
            {
                resourceId: 'at',
                title: 'Hacking',
                start: '2019-02-09T13:00',
                end: '2019-02-09T18:00'
            },
            {
                resourceIds: ['at', 'a', 'b'],
                title: 'Dinner',
                start: '2019-02-09T18:00',
                end: '2019-02-09T19:00'
            },
            {
                resourceId: 'at',
                title: 'Hacking',
                start: '2019-02-09T19:00',
                end: '2019-02-09T24:00'
            },
            {
                resourceId: 'a',
                title: 'Attendee Check In',
                start: '2019-02-09T09:00',
                end: '2019-02-09T11:00'
            },
            {
                resourceId: 'a',
                title: 'Organizers Orientation',
                start: '2019-02-09T13:00',
                end: '2019-02-09T13:30'
            },
            {
                resourceId: 'b',
                title: 'Sponsor and Mentor Check In',
                start: '2019-02-09T08:00',
                end: '2019-02-09T11:00'
            },
            {
                resourceId: 'b',
                title: 'New Hacker Orientation',
                start: '2019-02-09T13:00',
                end: '2019-02-09T13:30'
            },
            {
                resourceId: 'r',
                title: 'Sleeping Rooms Open',
                start: '2019-02-09T21:00',
                end: '2019-02-10T09:30'
            },
            {
                resourceIds: ['at', 'a', 'b', 'ac'],
                title: 'Midnight Snack',
                start: '2019-02-10T00:00',
                end: '2019-02-10T01:00'
            },
            {
                resourceIds: ['at', 'a', 'b', 'ac'],
                title: 'Hacking',
                start: '2019-02-10T01:00',
                end: '2019-02-10T08:00'
            },
            {
                resourceIds: ['at', 'a', 'b', 'ac'],
                title: 'Breakfast',
                start: '2019-02-10T08:00',
                end: '2019-02-10T09:00'
            },
            {
                resourceIds: ['at', 'a', 'b', 'ac'],
                title: 'Hacking',
                start: '2019-02-10T09:00',
                end: '2019-02-10T11:30'
            },
            {
                resourceId: 'r',
                title: 'Devpost Submission',
                start: '2019-02-10T10:30',
                end: '2019-02-10T11:30'
            },
            {
                resourceIds: ['at', 'a', 'b', 'ac'],
                title: 'Lunch',
                start: '2019-02-10T11:00',
                end: '2019-02-10T12:00'
            },
            {
                resourceId: 'r',
                title: 'Expo/Judging',
                start: '2019-02-10T11:30',
                end: '2019-02-10T13:00'
            },
            {
                resourceIds: ['at', 'a', 'b', 'ac'],
                title: 'Closing Ceremony',
                start: '2019-02-10T13:30',
                end: '2019-02-10T14:30'
            },
            {
                resourceIds: ['at', 'a', 'b', 'ac', 'r'],
                title: 'Top 3 Hacks + Awards',
                start: '2019-02-10T14:30',
                end: '2019-02-10T15:00'
            }
        ],

        eventBackgroundColor: '#ffd58a',

        eventBorderColor: '#a97c50',

        eventTextColor: '#000000',

        displayEventTime: false,

        schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives'
    })

    $("#workshops").fullCalendar({
        header: {
            left: 'title',
            center: '',
            right: '',
        },

        defaultView: 'agendaDay',

        defaultDate: '2019-02-09',

        nowIndicator: true,

        minTime: "12:00:00",

        maxTime: "22:00:00",

        height: "auto",
        
        allDaySlot: false,
        
        slotEventOverlap: false,

        slotDuration: '00:15:00',

        resources: [
            { id: 'a', title: 'Classroom A' },
            { id: 'b', title: 'Classroom B' },
            { id: 'ac', title: 'Activity Room' }
        ],

        groupByDateAndResource: true,

        events: [
            {
                resourceId: 'a',
                title: 'Google Cloud',
                start: '2019-02-09T13:30',
                end: '2019-02-09T14:30'
            },
            {
                resourceId: 'a',
                title: 'Workshop TBD',
                start: '2019-02-09T14:30',
                end: '2019-02-09T15:30'
            },
            {
                resourceId: 'a',
                title: 'JP Morgan & Chase',
                start: '2019-02-09T15:30',
                end: '2019-02-09T16:30'
            },
            {
                resourceId: 'a',
                title: 'Alexa',
                start: '2019-02-09T16:30',
                end: '2019-02-09T17:30'
            },
            {
                resourceId: 'a',
                title: 'Sushi Making',
                start: '2019-02-09T19:00',
                end: '2019-02-09T20:00'
            },
            {
                resourceId: 'b',
                title: 'Workshop TBD',
                start: '2019-02-09T13:30',
                end: '2019-02-09T14:30'
            },
            {
                resourceId: 'b',
                title: 'Karsun Solutions',
                start: '2019-02-09T14:30',
                end: '2019-02-09T15:30'
            },
            {
                resourceId: 'b',
                title: 'Git',
                start: '2019-02-09T15:30',
                end: '2019-02-09T16:00'
            },
            {
                resourceId: 'b',
                title: 'Techlahoma',
                start: '2019-02-09T16:00',
                end: '2019-02-09T16:30'
            },
            {
                resourceId: 'b',
                title: 'Workshop TBD',
                start: '2019-02-09T16:30',
                end: '2019-02-09T17:30'
            },
            {
                resourceId: 'b',
                title: 'iOS Workshop',
                start: '2019-02-09T17:30',
                end: '2019-02-09T18:00'
            },
            {
                resourceId: 'b',
                title: 'Google Maps',
                start: '2019-02-09T19:00',
                end: '2019-02-09T20:00'
            },
            {
                resourceId: 'ac',
                title: 'Team Building Lunch',
                start: '2019-02-09T12:00',
                end: '2019-02-09T13:00'
            },
            {
                resourceId: 'ac',
                title: 'Cup Stacking',
                start: '2019-02-09T20:00',
                end: '2019-02-09T21:00'
            },
            {
                resourceId: 'ac',
                title: 'Smash Tournament',
                start: '2019-02-09T21:00',
                end: '2019-02-09T22:00'
            }
        ],

        eventBackgroundColor: '#ffd58a',

        eventBorderColor: '#a97c50',

        eventTextColor: '#000000',

        displayEventTime: false,

        schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives'
    })
});
