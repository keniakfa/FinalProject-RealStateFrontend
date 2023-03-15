import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from 'sweetalert'

const UpdateHouse = (props) => {

    const [address, setAddress] = useState({ street:"", neighborhood:"", city:"", state:"", zipCode:0 });
  const handleChange = e => {
    const { name, value}  = e.target
    setAddress(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  
  const [bedRooms, setBedrooms] = useState()
  const [baths, setBaths] = useState()
  const [builtYear, setBuiltYear] = useState()
  const [houseSize, setHouseSize] = useState('')
  const [price, setPrice] = useState()
  const [sellRent, setSellRent] = useState('')
  const [picture, setPicture] = useState('')

  const navigate = useNavigate();

  const {id} = useParams()

  const token = localStorage.getItem('token')

  const headers = {
    'Authorization': 'Bearer ' + token
  }

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/viewhouse/userhouses/${id}`, {headers})
        .then(response => {
            let {
                address,
                bedRooms,
                baths,
                builtYear,
                houseSize,
                price,
                sellRent,
                picture
            } = response.data
            setAddress(address)
            setBedrooms(bedRooms)
            setBaths(baths)
            setBuiltYear(builtYear)
            setHouseSize(houseSize)
            setPrice(price)
            setSellRent(sellRent)
            setPicture(picture)

        })
  }, [id])

  const handleSubmit = e => {
    e.preventDefault()

    const updateHouse = {
        address,
        bedRooms,
        baths,
        builtYear,
        houseSize,
        price,
        sellRent,
        picture
    }

    axios.put(`${process.env.REACT_APP_API_URL}/updatehouse/${id}`, {headers}, updateHouse)
        .then((response) => {
            swal({
                title: "House Updated",
                icon: "success",
                button: "OK",
              })
        })
        .then((response) => {
            navigate("/manageitens")
        })
        .catch((err) => console.log(err))
        
  }

  const handleUpload = e => {
    const uploadData = new FormData()
    uploadData.append('housePicture', e.target.files) 
    axios.post('http://localhost:3001/houses/uploadImages', uploadData)
        .then(response => {
          setPicture(response.data.url)
        })
        .catch(err => console.log(err))
  }

  return (
    <div className="createHouse">
      <div className="row">
        <div className="col">
          <h1>Update your ad here </h1>
          <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-2">
              <label for="inputseelrent" className="form-label">Seel / Rent</label>
              <select onChange={ e => setSellRent(e.target.value)} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected>Choice Here</option>
                <option value="sell">Sell</option>
                <option value="rent">Rent</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputStreet" className="form-label">Street</label>
              <input type="text" 
                     className="form-control" 
                     id="street"
                     value= {address.street}
                     onChange={handleChange}
                     name="street"
                     />
            </div>
            <div className="col-md-3">
              <label for="inputNeighborhood" className="form-label">Neighborhood</label>
              <input type="text" 
                     className="form-control" 
                     id="neighborhood"
                     value= {address.neighborhood}
                     onChange={handleChange}
                     name="neighborhood"
                     />
            </div>
            <div className="col-md-3">
              <label for="inputCity" className="form-label">City</label>
              <input type="text" 
                     className="form-control" 
                     id="city"
                     value= {address.city}
                     onChange={handleChange}
                     name="city"
                     />
            </div>
            <div className="col-md-3">
              <label for="inputState" className="form-label">State</label>
              <input type="text" 
                     className="form-control" 
                     id="state"
                     value= {address.state}
                     onChange={handleChange}
                     name="state"
                     />
            </div>
            <div className="col-md-2">
              <label for="inputzipcode" className="form-label">Zip Code</label>
              <input type="number" 
                     className="form-control" 
                     id="zipcode"
                     value= {address.zipCode}
                     onChange={handleChange}
                     name="zipCode"
                     />
            </div>
            <div className="col-md-1">
              <label for="inputbedrooms" className="form-label">Bedrooms</label>
              <input type="number" 
                     className="form-control" 
                     id="bedrooms"
                     value= {bedRooms}
                     onChange={(e) => setBedrooms(e.target.value)}
                     />
            </div>
            <div className="col-md-1">
              <label for="inputbaths" className="form-label">Baths</label>
              <input type="number" 
                     className="form-control" 
                     id="baths"
                     value= {baths}
                     onChange={(e) => setBaths(e.target.value)}
                     />
            </div>
            <div className="col-md-1">
              <label for="inputbuiltYear" className="form-label">Built year</label>
              <input type="number" 
                     className="form-control" 
                     id="builtYear"
                     value= {builtYear}
                     onChange={(e) => setBuiltYear(e.target.value)}
                     />
            </div>
            <div className="col-md-2">
              <label for="inputhouseSize" className="form-label">House size</label>
              <input type="text" 
                     className="form-control" 
                     id="houseSize"
                     value= {houseSize}
                     onChange={(e) => setHouseSize(e.target.value)}
                     />
            </div>
          <div>
            <div className="col-md-2">
              <label for="inputprice" className="form-label">Price</label>
              <input type="number"
                     placeholder="Your price here $" 
                     className="form-control" 
                     id="price"
                     value= {price}
                     onChange={(e) => setPrice(e.target.value)}
                     />
            </div>
          </div>
            <div>
              <div>
                <div className="mb-3 col-md-4">
                  <label for="formFileMultiple" className="form-label">Images here</label>
                  <input className="form-control" 
                          type="file" 
                          id="formFileMultiple" multiple
                          onChange={e => handleUpload(e)}
                          />
                </div>
              </div>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>


  );
}

export default UpdateHouse