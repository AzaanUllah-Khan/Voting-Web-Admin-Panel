import React from 'react';
import { Select } from 'antd';
const Dropdown = () => (
  <Select
    style={{ cursor: "pointer" }}
    showSearch
    placeholder="Select a Designation"
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'Headboy',
        label: 'Headboy',
      },
      {
        value: 'Headgirl',
        label: 'Headgirl',
      },
      {
        value: 'Deputy Headboy',
        label: 'Deputy Headboy',
      },
      {
        value: 'Deputy Headgirl',
        label: 'Deputy Headgirl',
      },
    ]}
  />
);
export default Dropdown;