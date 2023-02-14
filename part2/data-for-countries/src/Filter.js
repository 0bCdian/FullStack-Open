export const Filter = ({ handleSearch }) => {
  return (
    <form>
      <input type="text" onChange={handleSearch}></input>
    </form>
  )
}
