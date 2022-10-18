export const canAttack = (positionsArray) => {
    const attackArea = [6, -6, 10, -10, 15, -15, 17, -17];
    let attack = false;

    attackArea.forEach((possibleAttackPosition) => {
        const playerAPosition = getPlayerPosition(positionsArray.a);
        const playerBPosition = getPlayerPosition(positionsArray.b)
        const bothPlayersAreOntheBoard = isOnTheBoard(playerAPosition) && isOnTheBoard(playerBPosition);

        if (playerAPosition + possibleAttackPosition === playerBPosition && bothPlayersAreOntheBoard) {
            attack = true;
        }
    });
    return attack;
};

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

const isOnTheBoard = (playerPosition) => {
    return playerPosition <= 64 && playerPosition > 0;
}