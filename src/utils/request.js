const API_KEY = process.env.API_KEY;

export default {
  fetchSexualHealth: {
    tittle: "Sexual Heath",
    url: "/sexualhealth?api_key=$(API_KEY)&language=en-US",
  },
  fetchSelfAwareness: {
    tittle: "Self-Awareness",
    url: "/selfawareness?api_key=$(API_KEY)&language=en-US",
  },
  fetchSocialAwareness: {
    tittle: "Social-Awareness",
    url: "/socialawareness?api_key=$(API_KEY)&language=en-US",
  },
  fetchCommunication: {
    tittle: "Communication",
    url: "/Communication?api_key=$(API_KEY)&language=en-US",
  },
  fetchRelationships: {
    tittle: "Relationships",
    url: "/Relationships?api_key=$(API_KEY)&language=en-US",
  },
  fetchMoviesSeries: {
    tittle: "Movies and series",
    url: "/movies/series?api_key=$(API_KEY)&language=en-US",
  },
  fetchHelpfulResources: {
    tittle: "Relationships",
    url: "/Relationships?api_key=$(API_KEY)&language=en-US",
  },
  AskProfessionals: {
    tittle: "Movies and series",
    url: "/movies/series?api_key=$(API_KEY)&language=en-US",
  },
};
