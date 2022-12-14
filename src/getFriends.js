const database = (() => {
  const _database = {
    621: { id: 621, name: "XxDragonSlayerxX", friends: [123, 251, 631] },
    123: { id: 123, name: "FriendNo1", friends: [621, 631] },
    251: { id: 251, name: "SecondBestFriend", friends: [621] },
    631: { id: 631, name: "ThirdWh33l", friends: [621, 123, 251] }
  };

  const getUser = (id) =>
    new Promise((res, rej) => {
      setTimeout(() => {
        _database[id] ? res(_database[id]) : rej(new Error("not_found"));
      }, 300);
    });

  const listUserIDs = () => Promise.resolve([621, 123, 251, 631]);

  return { getUser, listUserIDs };
})();

export async function getResult() {
    const users = await database.listUserIDs();
    let result = [];
    for (const userId of users) {
        let user = await getUserById(userId);
        let userData = {};
        userData.id = user.id;
        userData.name = user.name;
        userData.friends = await getFriends(user);
        result.push(userData);
    }
    return result;
}

const getUserById = (userId) => {
    return database.getUser(userId);
}

async function getFriends(user) {
    let friendsArray = [];
    for (const friendId of user.friends) {
        const friend = await getUserById(friendId);
        friendsArray.push(friend);
    }
    return friendsArray;
}
