export function createRandomGroups(users, personsInGroup) {
  const usersCopy = [...users] // clone
  const totalGroups = Math.floor(users.length / personsInGroup)
  const groups = []
  for (let i = 0; i < totalGroups; i++) {
    const group = []
    for (let j = 0; j < personsInGroup; j++) {
      const randomIndex = Math.floor(Math.random() * usersCopy.length)
      const randomUser = usersCopy[randomIndex]
      group.push(randomUser)
      usersCopy.splice(randomIndex, 1)
    }
    groups.push(group)
  }
  return {
    inGroups: groups,
    noGroups: usersCopy,
  }
}


/* 
['ana','juana','ivana','juliana','mariana']    2 personas por grupo
{
    inGroups: [
        [xxx,xxx],
        [xxx,xxx],
    ]
    noGroups: [xxx]
}*/
