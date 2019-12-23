const { gql } = require('apollo-server');

const typeDefs = gql`
  # schema here

  #Query type
  type Query {
    launches: [Launch]
    launch(id: ID): Launch
    # Queries for current user
    me: User
  }

  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  type Mission {
    name: String
    missionPatch(mission: String, size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String
    trips: [Launch]
  }

  #mutation type
  type Mutation {
    # if false, booking trips failed -- check errors
    bookTrips(launchIds: [ID]!): TripUpdateResponse

    # if false, cancellation failed -- check errors
    cancelTrip(launchId: ID!): TripUpdateResponse

    login(email: String): String  #login token
  }

  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }
`;

module.exports = typeDefs;