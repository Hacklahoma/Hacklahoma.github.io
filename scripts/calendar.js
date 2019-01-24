$(function() {
    var minDate = new Date('2019-02-10');
    var maxDate = new Date('2019-02-11');

    $("#calendar").fullCalendar({
        header: {
            left: 'title',
            center: '',
            right: 'prev, next',
        },

        defaultView: 'agendaDay',

        defaultDate: '2019-02-09',

        viewRender: function(view) {
            if(view.start < minDate) {
                $('#calendar').fullCalendar('gotoDate', minDate);
            }

            if (view.start > maxDate - 1) {
                $('#calendar').fullCalendar('gotoDate', maxDate);
            }
        },

        nowIndicator: true,
        
        allDaySlot: false,
        
        slotEventOverlap: false,

        resources: [
            { id: 'at', title: 'Atrium' },
            { id: 'a', title: 'Classroom A' },
            { id: 'b', title: 'Classroom B' },
            { id: 's', title: 'Small Room' },
            { id: 'r', title: 'REPF' }
        ],

        groupByDateAndResource: true,

        events: [
            {
                resourceIds: ['at', 'a', 'b'],
                title: 'Opening',
                start: '2019-02-09T12:00',
                end: '2019-02-09T12:30'
            },
            {
                resourceIds: ['at', 'a', 'b'],
                title: 'Lunch',
                start: '2019-02-09T12:30',
                end: '2019-02-09T13:30'
            },
            {
                resourceId: 'at',
                title: 'Hacking',
                start: '2019-02-09T13:30',
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
                end: '2019-02-09T12:00'
            },
            {
                resourceId: 'a',
                title: 'Google Cloud',
                start: '2019-02-09T13:30',
                end: '2019-02-09T14:30'
            },
            {
                resourceId: 'a',
                title: 'Workshops',
                start: '2019-02-09T14:30',
                end: '2019-02-09T15:30'
            },
            {
                resourceId: 'a',
                title: 'iOS Workshop',
                start: '2019-02-09T15:30',
                end: '2019-02-09T16:30'
            },
            {
                resourceId: 'a',
                title: 'Workshops',
                start: '2019-02-09T16:30',
                end: '2019-02-09T18:00'
            },
            {
                resourceId: 'a',
                title: 'Workshops',
                start: '2019-02-09T19:00',
                end: '2019-02-09T20:00'
            },
            {
                resourceId: 'a',
                title: 'Activities',
                start: '2019-02-09T20:00',
                end: '2019-02-09T24:00'
            },
            {
                resourceId: 'b',
                title: 'Sponsor/Mentor Check In',
                start: '2019-02-09T08:00',
                end: '2019-02-09T12:00'
            },
            {
                resourceId: 'b',
                title: 'Workshops',
                start: '2019-02-09T13:30',
                end: '2019-02-09T18:00'
            },
            {
                resourceId: 'b',
                title: 'Workshops',
                start: '2019-02-09T19:00',
                end: '2019-02-09T20:00'
            },
            {
                resourceId: 'b',
                title: 'Hacking',
                start: '2019-02-09T20:00',
                end: '2019-02-09T24:00'
            },
            {
                resourceId: 's',
                title: 'Activities',
                start: '2019-02-09T13:30',
                end: '2019-02-09T24:00'
            },
            {
                resourceId: 'r',
                title: 'Sleep',
                start: '2019-02-09T08:00',
                end: '2019-02-09T24:00'
            },
            {
                resourceIds: ['at', 'a', 'b', 's', 'r'],
                title: 'Hacking',
                start: '2019-02-10T00:00',
                end: '2019-02-10T07:00'
            },
            {
                resourceIds: ['at', 'a', 'b', 's'],
                title: 'Breakfast',
                start: '2019-02-10T07:00',
                end: '2019-02-10T07:30'
            },
            {
                resourceIds: ['at', 'a', 'b', 's'],
                title: 'Hacking',
                start: '2019-02-10T07:30',
                end: '2019-02-10T11:00'
            },
            {
                resourceId: 'r',
                title: 'Devpost Submission',
                start: '2019-02-10T10:30',
                end: '2019-02-10T11:00'
            },
            {
                resourceIds: ['at', 'a', 'b', 's'],
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
                resourceId: 'r',
                title: 'Clean',
                start: '2019-02-10T13:00',
                end: '2019-02-10T14:30'
            },
            {
                resourceId: 'at',
                title: 'Clean',
                start: '2019-02-10T12:00',
                end: '2019-02-10T13:30'
            },
            {
                resourceId: 'at',
                title: 'Closing Ceremony',
                start: '2019-02-10T13:30',
                end: '2019-02-10T14:30'
            },
            {
                resourceIds: ['a', 'b', 's'],
                title: 'Clean',
                start: '2019-02-10T12:00',
                end: '2019-02-10T14:30'
            },
            {
                resourceIds: ['at', 'a', 'b', 's', 'r'],
                title: 'Top 3 Presentations + Awards',
                start: '2019-02-10T14:30',
                end: '2019-02-10T15:00'
            },
            {
                resourceIds: ['at', 'a', 'b', 's', 'r'],
                title: 'Clean',
                start: '2019-02-10T15:00',
                end: '2019-02-10T16:30'
            }
        ],

        eventBackgroundColor: '#ffd58a',

        eventBorderColor: '#a97c50',

        eventTextColor: '#000000',

        displayEventTime: false,

        schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives'
    })
});