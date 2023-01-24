export const Filter = ({ handleChangeSearch }) => {
    return (
        <div>
            filter shown with: <input onChange={handleChangeSearch} />
        </div>
    )
}