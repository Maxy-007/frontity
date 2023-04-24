import React from "react";
import { connect } from "frontity";

const Team = ({ state }) => {
  // Get the "team" posts from the source
  const [selectedTeamMemberData, setSelectedTeamMemberData] = React.useState(null);
  const teamPosts = state.source.get(state.router.link);

  const fetchCustomFieldData = async (id) => {
    try {
      const response = await state.source.api.get(`wp/v2/posts/${id}`);
      const customFieldData = response.Designation.team_designation; 
      setSelectedTeamMemberData(customFieldData);
    } catch (error) {
      console.error("Error fetching custom field data:", error);
    }
  };

  return (
    <div>
      <h2>Team Members</h2>
      {teamPosts.items.map(({ id, link, title }) => (
        <div key={id}>
         <a href={link} onClick={() => fetchCustomFieldData(id)}>
          {title.rendered}
        </a>
        {selectedTeamMemberData && <div>{selectedTeamMemberData}</div>}
        
        </div>
      ))}
    </div>
  );
};

export default connect(Team);
