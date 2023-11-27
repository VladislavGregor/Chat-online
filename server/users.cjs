import { trimStr } = require("./utils.cjs");

let users = [];

const findUser = (user) => {
    const userName = trimStr(user.name);
    const userRoom = trimStr(user.room);

    return users.find(
        (u) => trimStr(u.name) === userName && trimStr(u.room) === userRoom
    );
};


const addUser = (user) => {
    const isExist = user.find(
        (u) => trimStr(u.name) === userName && trimStr(u.room) === userRoom
        );

    !isExist && users.push(user);

    const currentUser = isExist || user;

    return { isExist : !!isExist,  user: currentUser};
};
// функция, отдающая всех наших юзеров
const getRoomUsers = (room) => 
    users.filter((u)=> u.room === room);

const removeUser = (user) => {
    const found = findUser(user);
    
    if (found) {
        users = users.filter(({room, name }) => room === found.room && name !== found.name
        );
    }
    return found;
};

module.exports = {addUser, findUser, removeUser};