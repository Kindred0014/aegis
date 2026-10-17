const excludedCommonBuildings = {
	JAPANESE: ['Blacksmith'],
	SENGOKU: ['Blacksmith', 'Market'],
	GOLDEN_HORDE: ['Stable'],
	TEMPLAR: ['Dock'],
	MACEDONIAN: ['Barracks'],
	JIN: ['Siege Workshop']
}
const excludedCommonSlots = {
	JAPANESE: ['0:1:0:0'],
	SENGOKU: ['0:1:0:0', '0:1:0:1'],
	JIN: ['0:2:1:0']
}

const isCommonBuildingExcluded = (building, group) =>
	excludedCommonBuildings[group]?.includes(building.name) ||
	excludedCommonSlots[group]?.includes(
		`${building.shortcut[0]}:${building.shortcut[1]}`
	)

const filterBuildings = (arr, filterParam) => {
	const { types, ages, group } = filterParam
	const groupBuildings = arr.filter((building) => building.group === group)
	const overriddenSlots = new Set(
		groupBuildings.map(
			(building) => `${building.shortcut[0]}:${building.shortcut[1]}`
		)
	)

	return arr.filter((building) => {
		return (
			types[building.type] &&
			ages[building.age] &&
			(building.group === group ||
				(building.group === 'COMMON' &&
					!isCommonBuildingExcluded(building, group) &&
					!overriddenSlots.has(
						`${building.shortcut[0]}:${building.shortcut[1]}`
					)))
		)
	})
}

export { filterBuildings, isCommonBuildingExcluded }
