const getPlayerPosition = (position) => {
    const verticalLetterAsNumber = (position[0].toUpperCase().charCodeAt(0) - 65);
    let playerVerticalPosition = verticalLetterAsNumber + 1;
    let playerHorizontalPosition = position[1];
    let playerPosition = parseInt(("" + playerVerticalPosition) + ("" + playerHorizontalPosition));

    if (playerVerticalPosition > 1) {
        playerPosition = playerPosition - (verticalLetterAsNumber * 2);
    }

    return playerPosition - 10;
}


// implement this method to test if two knights threaten eachother
export const canAttack = (positionsArray) => {
    const attackArea = [6, -6, 10, -10, 15, -15, 17, -17];
    let attack = false;
    attackArea.forEach((possibleAttackPosition) => {
        if (getPlayerPosition(positionsArray.a) + possibleAttackPosition === getPlayerPosition(positionsArray.b)) {
                attack = true;
        }
    });
    return attack;
};