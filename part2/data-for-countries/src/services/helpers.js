export const updateSearchFilter = (
  countries,
  searchFilter,
  setCountriesToDisplay
) => {
  const results = countries.filter((country) => {
    const nameOfficial = country.name.official.toLowerCase()
    const nameCommon = country.name.common.toLowerCase()
    return (
      nameOfficial.includes(searchFilter) || nameCommon.includes(searchFilter)
    )
  })
  setCountriesToDisplay(results)
}
