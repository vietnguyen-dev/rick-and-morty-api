import React, {useState} from 'react'

const ChararacterSearchForm = () => {
    const [name, setName] = useState('')
    const [status, setStatus] = useState(null);
    const [species, setSpecies] = useState(null);

    return (
      <div style={{ textAlign: `center`, padding: `1% 5%` }}>
        <form>
          <div>
            <label>Name </label>
            <input
              value={name}
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label>Status: </label>
            <select>
              <option value="alive">Alive</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <div>
            <label>Species: </label>
            <select>
              <option value="alive">Alive</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <div>
            <label>Type: </label>
            <select>
              <option value="alive">Alive</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <div>
            <label>Gender: </label>
            <select>
              <option value="alive">male</option>
              <option value="alive">Female</option>
              <option value="alive">Genderless</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <button type="submit">Search</button>
        </form>
      </div>
    );
}

export default ChararacterSearchForm
