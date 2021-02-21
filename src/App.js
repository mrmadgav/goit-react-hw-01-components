import React from "react";
import Profile from "./components/Profile/Profile.jsx";
import user from "./JSONbases/user.json";
import Statistics from "./components/statistics/Statistics.jsx";
import statisticalData from "./JSONbases/statistical-data.json";

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
    </div>
  );
};

export default App;
