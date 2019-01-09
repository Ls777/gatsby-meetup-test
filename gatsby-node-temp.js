/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const createTemporaryMockNodes = ({ emitter, actions }) => {
  const node = {
    id: 'mocked',
    parent: null,
    children: [
      {
        id: 'mocked2',
        parent: 'mocked',
        children: [],
        internal: {
          type: 'meetupEvent',
          contentDigest: 'foo2'
        },
        created: 1441754034000,
        duration: 10800000,
        name: 'JavaScript Monthly Meetup',
        status: 'upcoming',
        time: 1548889200000,
        local_date: '2019-01-30',
        local_time: '18:00',
        updated: 1501197222000,
        utc_offset: -18000000,
        waitlist_count: 0,
        yes_rsvp_count: 13,
        venue: {
          id: 23559265,
          name: 'Huntington Launch Pad',
          lat: 40.8712272644043,
          lon: -73.42887878417969,
          repinned: false,
          address_1: '315 Main Street, 2nd Fl',
          city: 'Huntington',
          country: 'us',
          localized_country_name: 'USA',
          zip: '',
          state: 'NY'
        },
        group: {
          created: 1433068115000,
          name: 'Long Island JavaScript Group',
          id: 18638019,
          join_mode: 'open',
          lat: 40.869998931884766,
          lon: -73.41000366210938,
          urlname: 'long-island-javascript-group',
          who: 'JavaScript Enthusiasts',
          localized_location: 'Huntington, NY',
          state: 'NY',
          country: 'us',
          region: 'en_US',
          timezone: 'US/Eastern'
        },
        link:
          'https://www.meetup.com/long-island-javascript-group/events/zjlpklyzcbnc/',
        description:
          '<p>Our monthly Meetup will cover all things JavaScript, from plain JavaScript, libraries and frameworks, JavaScript on the server and everything in between.</p> <p>The Meetup will be divided into two segments:</p> <p>1. Beginner (6:00-7:30 PM)</p> <p>2. Advanced (7:30-9:00 PM) </p> <p>We will post the agenda for this Meetup closer to the scheduled date.</p> <p>Food and beverages will not be provided but there are plenty of great places to eat within walking distance. You are also welcome to bring food with you.<br/>LaunchPad is located in downtown Huntington. </p> <p>There is usually plenty of free parking in the rear parking lot as well as rear access to the building. Look for a glass door with the LaunchPad sign next to the Bon Bons Chocolatier and take the elevator up to the second floor.</p> <p>If the front door is locked, please go to the rear door as it should always be unlocked. If you are still not able to get in, please call or text 631-432-4309.</p> <p>We look forward to seeing you there!</p> ',
        visibility: 'public'
      }
    ],
    internal: {
      type: 'meetupGroup',
      contentDigest: 'foo'
    },
    name: 'Long Island JavaScript Group',
    status: 'active',
    link: 'https://www.meetup.com/long-island-javascript-group/',
    urlname: 'long-island-javascript-group',
    description: 'asd',
    created: 1433068115000,
    city: 'Huntington',
    untranslated_city: 'Huntington',
    country: 'US',
    localized_country_name: 'USA',
    localized_location: 'Huntington, NY',
    state: 'NY',
    join_mode: 'open',
    visibility: 'public',
    lat: 40.87,
    lon: -73.41,
    members: 364,
    organizer: {
      id: 50837582,
      name: 'Justin Wilkerson',
      bio: '',
      photo: {
        id: 263976467,
        highres_link:
          'https://secure.meetupstatic.com/photos/member/8/e/7/3/highres_263976467.jpeg',
        photo_link:
          'https://secure.meetupstatic.com/photos/member/8/e/7/3/member_263976467.jpeg',
        thumb_link:
          'https://secure.meetupstatic.com/photos/member/8/e/7/3/thumb_263976467.jpeg',
        type: 'member',
        base_url: 'https://secure.meetupstatic.com'
      }
    },
    who: 'JavaScript Enthusiasts',
    group_photo: {
      id: 476704143,
      highres_link:
        'https://secure.meetupstatic.com/photos/event/1/0/2/f/highres_476704143.jpeg',
      photo_link:
        'https://secure.meetupstatic.com/photos/event/1/0/2/f/600_476704143.jpeg',
      thumb_link:
        'https://secure.meetupstatic.com/photos/event/1/0/2/f/thumb_476704143.jpeg',
      type: 'event',
      base_url: 'https://secure.meetupstatic.com'
    },
    key_photo: {
      id: 476673630,
      highres_link:
        'https://secure.meetupstatic.com/photos/event/8/3/5/e/highres_476673630.jpeg',
      photo_link:
        'https://secure.meetupstatic.com/photos/event/8/3/5/e/600_476673630.jpeg',
      thumb_link:
        'https://secure.meetupstatic.com/photos/event/8/3/5/e/thumb_476673630.jpeg',
      type: 'event',
      base_url: 'https://secure.meetupstatic.com'
    },
    timezone: 'US/Eastern',
    next_event: {
      id: 'zjlpklyzcbnc',
      name: 'JavaScript Monthly Meetup',
      yes_rsvp_count: 13,
      time: 1548889200000,
      utc_offset: -18000000
    },
    category: {
      id: 34,
      name: 'Tech',
      shortname: 'tech',
      sort_name: 'Tech'
    },
    meta_category: {
      id: 292,
      shortname: 'tech',
      name: 'Tech',
      sort_name: 'Tech',
      photo: {
        id: 450131949,
        highres_link:
          'https://secure.meetupstatic.com/photos/event/2/e/a/d/highres_450131949.jpeg',
        photo_link:
          'https://secure.meetupstatic.com/photos/event/2/e/a/d/600_450131949.jpeg',
        thumb_link:
          'https://secure.meetupstatic.com/photos/event/2/e/a/d/thumb_450131949.jpeg',
        type: 'event',
        base_url: 'https://secure.meetupstatic.com'
      },
      category_ids: [34]
    }
  }

  actions.createNode(node)

  const onSchemaUpdate = () => {
    actions.deleteNode({ node })

    // poor man's "once"
    emitter.off(`SET_SCHEMA`, onSchemaUpdate)
  }

  // we will listen to when schema is set,
  // so we can immediately remove mocked nodes
  // as types are already produced, we don't need them anymore
  // THIS IS HACKY - emitter is considered more of a private API
  // and listening to internal SET_SCHEMA message might be begging
  // for problems
  emitter.on(`SET_SCHEMA`, onSchemaUpdate)
}

// that's pretty normal spot to create nodes
exports.sourceNodes = ({ emitter, actions }) => {
  createTemporaryMockNodes({ emitter, actions })
}

// this is just first API hook after "createPages" hook
// and before regenerating schema
exports.onPreExtractQueries = ({ emitter, actions }) => {
  createTemporaryMockNodes({ emitter, actions })
}
