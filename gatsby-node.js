/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fetch = require('node-fetch')
const queryString = require('query-string')

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  // Processes a Meetup Group
  const processGroup = group => {
    const nodeId = createNodeId(`meetup-group-${group.id}`)
    const nodeContent = JSON.stringify(group)

    const nodeData = Object.assign({}, group, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `MeetupGroup`,
        content: nodeContent,
        contentDigest: createContentDigest(group),
      },
    })

    return nodeData
  }

  // Processes a Meetup Event as a child of a Meetup Group
  const processEvent = (event, parent) => {
    const nodeId = createNodeId(`meetup-event-${event.id}`)
    const nodeContent = JSON.stringify(event)

    const nodeData = Object.assign({}, event, {
      id: nodeId,
      parent,
      children: [],
      internal: {
        type: `MeetupEvent`,
        content: nodeContent,
        contentDigest: createContentDigest(event),
      },
    })

    return nodeData
  }

  configOptionsSneaky = {
    // Learn about environment variables: https://gatsby.app/env-vars
    // Your Meetup.com API key can be retrieved here: https://secure.meetup.com/fr-FR/meetup_api/key/
    key: process.env.MEETUP_API_KEY,
    // Mandatory: the URL name of a Meetup Group.
    // See the URL of the group page, e.g. https://www.meetup.com/fr-FR/jamstack-paris
    // Long-Island-Wordpress-Users
    // developerdeepdives
    groupUrlName: 'developerdeepdives',
    // Optional parameters for retrieving Events, see full documentation at
    // https://www.meetup.com/meetup_api/docs/:urlname/events/?uri=%2Fmeetup_api%2Fdocs%2F%3Aurlname%2Fevents%2F#list
    status: 'upcoming,past',
    desc: 'true',
    page: 20,
  }

  const { groupUrlName, ...apiOpstions } = configOptionsSneaky
  // Convert the options object into a query string
  const queryStringOptions = queryString.stringify(apiOpstions)

  const apiGroupUrl = `https://api.meetup.com/${groupUrlName}?${queryStringOptions}`
  const apiEventsUrl = `https://api.meetup.com/${groupUrlName}/events?${queryStringOptions}`

  // Gatsby expects sourceNodes to return a promise
  return (
    // Fetch a response from the apiUrl
    Promise.all([fetch(apiGroupUrl), fetch(apiEventsUrl)])
      // Parse the response as JSON
      .then(responses =>
        Promise.all(responses.map(response => response.json()))
      )
      // Process the JSON data into a node
      .then(dataArray => {
        console.log(dataArray)
        const groupData = dataArray[0]
        if (!groupData.hasOwnProperty('next_event')) {
          groupData.next_event = {
            id: '',
            name: '',
            yes_rsvp_count: 0,
            time: 00,
            utc_offset: 00000,
          }
        }
        const eventData = dataArray[1]
        if (eventData.length === 1) {
          eventData.push({ null: null })
        }
        // For each query result (or 'hit')
        let groupNode = processGroup(groupData)
        Object.values(eventData).forEach(event => {
          const nodeData = processEvent(event, groupNode.id)
          groupNode.children.push(nodeData.id)
          createNode(nodeData)
        })
        createNode(groupNode)
      })
  )
}
