
export const splitNames  = (namesArray) => {
    let result = [];
    for (const fullName of namesArray) {
        let nameParts = fullName.split(' ');
        let nameObj = {};

        nameObj.firstName = nameParts[0];
        nameParts.shift();

        const lastName = nameParts[nameParts.length - 1] || null;
        nameParts.pop();

        nameObj.middleNames = getMiddleNames(nameParts);
        nameObj.lastName = lastName;

        result.push(nameObj);
    }
    return result;
}

const getMiddleNames = (nameParts) => {
    let middleNames = [];
    for (const middleName of nameParts) {
        middleNames.push(middleName);
    }
    return middleNames;
}