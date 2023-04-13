const settings = {
  "name": "frontity-1",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "frontity",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://localhost/frontity/wp-json",
          "postTypes": [
            {
              type: "team",
              endpoint: "team",
              archive: "/team"
            }
          ],
          "taxonomies": []
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
