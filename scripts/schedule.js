$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
    	header: {
    		left: '',
    		center: 'title',
    		right: '',
    	},
    	
        defaultView: 'agenda',
        
        visibleRange: {
        	start: '2018-03-03',
       		end: '2018-03-05'
        },
        
        allDaySlot: false,
        
        slotDuration: '00:10:00',
        
        minTime: '08:00',
        maxTime: '24:00',
        
        slotEventOverlap: false,
        
        events: [
        	{
        		title: 'Sponsor Check-In/Booth Setup Opens',
        		start: '2018-03-03T08:30',
        		end: '2018-03-03T09:00'
        	},
        	{
        		title: 'Attendee Check-In',
        		start: '2018-03-03T09:00',
        		end: '2018-03-03T12:00'
        	},
        	{
        		title: 'Opening Ceremony',
        		start: '2018-03-03T11:30',
        		end: '2018-03-03T12:00'
        	},
        	{
        		title: 'Hacking Begins/Check-In Closes',
        		start: '2018-03-03T12:00',
        		end: '2018-03-03T12:30'
        	},
        	{
        		title: 'Vitech Challenge and Tech Talk in Workshop Room A',
        		start: '2018-03-03T12:05',
        		end: '2018-03-03T12:35'
        	},
        	{
        		title: 'Team Forming in Activity Room',
        		start: '2018-03-03T12:30',
        		end: '2018-03-03T13:00'
        	},
        	{
        		title: 'Lunch',
        		start: '2018-03-03T13:00',
        		end: '2018-03-03T14:00'
        	},
        	{
        		title: 'Idea Brainstorming Session in Activity Room',
        		start: '2018-03-03T14:00',
        		end: '2018-03-03T14:30'
        	},
        	{
        		title: 'Git Workshop in Workshop Room A',
        		start: '2018-03-03T15:00',
        		end: '2018-03-03T15:30'
        	},
        	{
        		title: 'Entrepreneurship/\nHow to Turn Your Hack Into a Startup in Workshop Room B',
        		start: '2018-03-03T15:00',
        		end: '2018-03-03T15:30'
        	},
        	{
        		title: 'Peer Feedback on Ideas in Activity Room',
        		start: '2018-03-03T15:30',
        		end: '2018-03-03T16:00'
        	},
        	{
        		title: '!Light HTML/CSS Workshop in Workshop Room A',
        		start: '2018-03-03T16:00',
        		end: '2018-03-03T16:30'
        	},
        	{
        		title: 'Technical Interview Prep in Workshop Room B',
        		start: '2018-03-03T16:00',
        		end: '2018-03-03T16:30'
        	},
        	{
        		title: 'How to Demo and Why You Should/\nSlideshow Karaoke Workshop in Workshop Room A',
        		start: '2018-03-03T17:00',
        		end: '2018-03-03T17:30'
        	},
        	{
        		title: 'How to Prepare For a Full Time Job in Software Development\n in Workshop Room B',
        		start: '2018-03-03T17:00',
        		end: '2018-03-03T17:30'
        	},
        	{
        		title: 'Dinner',
        		start: '2018-03-03T18:00',
        		end: '2018-03-03T19:00'
        	},
        	{
        		title: 'Evening Yoga in Activity Room',
        		start: '2018-03-03T19:30',
        		end: '2018-03-03T20:00'
        	},
        	{
        		title: 'HQ Trivia with Vitech in Workshop Room A',
        		start: '2018-03-03T20:00',
        		end: '2018-03-03T20:30'
        	},
        	{
        		title: 'MLH Cup Stacking in Activity Room',
        		start: '2018-03-03T20:30',
        		end: '2018-03-03T21:00'
        	},
        	{
        		title: 'Game Night in Activity Room',
        		start: '2018-03-03T22:00',
        		end: '2018-03-03T23:00'
        	},
        	{
        		title: 'Breakfast',
        		start: '2018-03-04T08:00',
        		end: '2018-03-04T09:00'
        	},
        	{
        		title: 'FINISH HACKING',
        		start: '2018-03-04T09:00',
        		end: '2018-03-04T12:00'
        	},
        	{
        		title: 'HACKING ENDS (submit to Devpost by 12PM)',
        		start: '2018-03-04T12:00',
        		end: '2018-03-04T12:30'
        	},
        	{
        		title: 'Lunch',
        		start: '2018-03-04T12:00',
        		end: '2018-03-04T13:00'
        	},
        	{
        		title: 'Judging/Expo',
        		start: '2018-03-04T13:00',
        		end: '2018-03-04T14:00'
        	},
        	{
        		title: 'Closing Ceremony',
        		start: '2018-03-04T14:00',
        		end: '2018-03-04T14:45'
        	},
        	{
        		title: 'HACKLAHOMA 2018 ENDS',
        		start: '2018-03-04T14:45',
        		end: '2018-03-04T15:15'
        	}
        ],
        eventColor: '#912929'
    });
});