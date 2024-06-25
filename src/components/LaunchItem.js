import React from 'react';
import '../styles/LaunchItem.scss';

const LaunchItem = ({ launch }) => {
  return (
    <div className="launch-item border p-4 rounded shadow">
      <img src={launch.links.mission_patch_small} alt={launch.mission_name} className="w-full h-48 object-cover" />
      <h2 className="text-xl font-bold mt-4">{launch.mission_name}</h2>
      <p>Launch Date: {new Date(launch.launch_date_local).toLocaleDateString()}</p>
      <p>Rocket: {launch.rocket.rocket_name}</p>
      <p>Launch Site: {launch.launch_site.site_name}</p>
    </div>
  );
};

export default LaunchItem;
