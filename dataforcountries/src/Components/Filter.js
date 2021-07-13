const Filter = ({ search, addSearch }) => {
    return (
      <div>
        search: <input value={search} onChange={addSearch}></input>
      </div>
    )
  }
  export default Filter