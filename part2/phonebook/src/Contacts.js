export const Contacts = ({ persons, newSearch, handleDeletion}) => {
    return (
        <div>
            
            {
                persons
                    .filter((person) => person.name.toLowerCase().includes(newSearch.toLowerCase()))
                    .map((person) => {
                        return (
                            <p key={person.id}>{person.name} {person.number} <button id={person.id} name={person.name} onClick={handleDeletion}>delete</button>
                           </p>
                            
                        )
                    })
            }
        </div>
    )
}