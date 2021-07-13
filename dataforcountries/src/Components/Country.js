const Country = ({ country, alterSearch }) => {
    return (
        <div>
            <button type="submit" value={country.name} onClick={alterSearch}>{country.name}</button>
        </div>
    )
}
export default Country