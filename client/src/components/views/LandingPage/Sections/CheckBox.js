import React, { useState } from "react";
import { Checkbox, Row, Col } from "antd";

function CheckBox(props) {
  const [Checked, setChecked] = useState([]);

  const handleToggle = (valueId) => {
    const currentIndex = Checked.indexOf(valueId); //-1 when it doesn't exist
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(valueId);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    props.handleFilters(newChecked);
  };

  const renderCheckboxLists = () =>
    props.list &&
    props.list.map((value, index) => (
      <React.Fragment key={index}>
        <Col lg={4} xs={24}>
          <Checkbox
            onChange={() => handleToggle(value._id)}
            type="checkbox"
            checked={Checked.indexOf(value._id) === -1 ? false : true}
          />
          <span>  {value.name}</span>
        </Col>
      </React.Fragment>
    ));
  return <div>{renderCheckboxLists()}</div>;
}

export default CheckBox;
