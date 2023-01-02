import React from "react";
import Form from "react-bootstrap/Form";
import "./PropertySorting.css";
const PropertySorting = ({ handleForm }) => {


  return (
    <div className="sorting-section p-3">
      <h5>Sort by</h5>
      <Form onSubmit={handleForm}>
        <Form.Group className="mb-2">
          <Form.Select aria-label="Default select example" name="price" required>
            <option value=""> Sort by price</option>
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Select aria-label="Default select example" name="city" required>
            <option value="">Choose city...</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Khulna">Khulna</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Mymensingh">Mymensingh</option>
          </Form.Select>
        </Form.Group>
        <h5 className="mt-2">Types of Rent</h5>
        <Form.Group>
          <Form.Check label="Flat Rent" />
          <Form.Check label="Apartment" />
          <Form.Check label="Commercial Space" />
          <Form.Check label="Office Space" />
          <Form.Check label="Restaurant" />
          <Form.Check label="Community Center" />
          <Form.Check label="Room for Bachelor" />
        </Form.Group>
        <h5 className="mt-2">Select Month</h5>
        <Form.Group>
          <Form.Select aria-label="Default select example" name="month" required>
            <option value="">Select Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </Form.Select>
        </Form.Group>
        <h5 className="mt-2">Bed Room</h5>
        <Form.Group required>
          <Form.Check label="1" value="1" name="bed" inline />
          <Form.Check label="2" value="2" name="bed" inline />
          <Form.Check label="3" value="3" name="bed" inline />
          <Form.Check label="4" value="4" name="bed" inline />
          <Form.Check label="5" value="5" name="bed" inline />
        </Form.Group>
        <h5 className="mt-2">Wash Room</h5>
        <Form.Group required>
          <Form.Check label="1" value="1" name="wash" inline />
          <Form.Check label="2" value="2" name="wash" inline />
          <Form.Check label="3" value="3" name="wash" inline />
          <Form.Check label="4" value="4" name="wash" inline />
        </Form.Group>
        {/* <div className="mt-2">
          <h5>Price Range</h5>
          <div className="d-flex justify-content-center">
            <Form.Group>
              <Form.Control
                min="0"
                step="500"
                pattern="[0-9]*"
                placeholder="Min"
                type="number"
              />
            </Form.Group>
            <p className="mx-2">to</p>
            <Form.Group>
              <Form.Control
                min="0"
                step="500"
                pattern="[0-9]*"
                placeholder="Max"
                type="number"
              />
            </Form.Group>
          </div>
        </div> */}
        <div className="my-4 text-center">
          <button className="all-property-btn " type="submit">Find Property</button>
        </div>
      </Form>

    </div>
  );
};

export default PropertySorting;
