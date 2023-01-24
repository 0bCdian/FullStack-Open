export const Contacts = ({ persons, newSearch, }) => {
    return (
        <div>
            
            {
                persons
                    .filter((person) => person.name.toLowerCase().includes(newSearch.toLowerCase()))
                    .map((person) => {
                        return (
                            <p key={person.id}>{person.name} {person.number}</p>
                        )
                    })
            }
        </div>
    )
}