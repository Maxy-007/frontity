import React from "react";
import { connect } from "frontity";

const Team = ({ state }) => {
  // Get the "team" posts from the source
  const teamPosts = state.source.get('/team');

  return (
    <div>
      <h2>Team Members</h2>
      {teamPosts.items.map(({ id, link, title }) => (
        <div key={id}>
          <a href={link}>{title.rendered}</a>
        </div>
      ))}
    </div>
  );
};

export default connect(Team);
