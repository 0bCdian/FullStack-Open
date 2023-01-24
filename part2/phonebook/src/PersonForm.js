
export const PersonForm = ({ handleChangeName, handleChangeNumber, handleSubmit }) => {
    return (
        <div>
           
            <form onSubmit={handleSubmit} >
                <div>
                    name: <input onChange={handleChangeName} />
                </div>
                <div> number: <input onChange={handleChangeNumber} /></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>

    )
}