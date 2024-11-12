function solve(obj) {
    if (obj.dizziness === true) {
        let newLevel = 0.1 * obj.weight * obj.experience;

        obj.levelOfHydrated += newLevel;
        obj.dizziness = false;
        return obj;
    }

    return obj;
}

console.log(
    solve({
        weight: 95,

        experience: 3,

        levelOfHydrated: 0,

        dizziness: false,
    })
);
