import React from "react";
import Profile from "./components/Profile/Profile.jsx";
import user from "./JSONbases/user.json";
import Statistics from "./components/statistics/Statistics.jsx";
import statisticalData from "./JSONbases/statistical-data.json";
import FriendList from "./components/friendList/FriendList.jsx";
import friends from "./JSONbases/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import transactions from "./JSONbases/transactons.json";
import 'modern-normalize/modern-normalize.css';

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
      <Statistics title="Upload stats" stats={statisticalData} />
      <h2 className="friend-title">Friends-List</h2>
      <FriendList friends={friends} />
      <h2 className="transaction-history-title">TransactionHistory</h2>
      <TransactionHistory items={transactions} />;
    </div>
  );
};

export default App;
