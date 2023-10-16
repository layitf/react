import React from "react";
import { Select } from "antd";

const mockData = [
  {
    skillId: "skillId3",
    skillname: "skillName3",
    value: "value1",
    describe: "describe1"
  },
  {
    skillId: "skillId1",
    skillname: "skillName1",
    value: "value2",
    describe: "describe2"
  },
  {
    skillId: "skillId3",
    skillname: "skillName3",
    value: "value3",
    describe: "describe1"
  },
  {
    skillId: "skillId1",
    skillname: "skillName1",
    value: "value4",
    describe: "describe4"
  },
  {
    skillId: "skillId1",
    skillname: "skillName1",
    value: "value5",
    describe: "describe5"
  },
  {
    skillId: "skillId1",
    skillname: "skillName1",
    value: "value6",
    describe: "describe6"
  }
];

// ==== ↓ ====
const deal = [
  {
    label: "Manager",
    options: [
      { label: "Jack", value: "jack" },
      { label: "Lucy", value: "lucy" }
    ]
  },
  {
    label: "Engineer",
    options: [{ label: "yiminghe", value: "Yiminghe" }]
  }
]


const App: React.FC = (props: any) => {
  const { data = mockData } = props;

  function dealData(data) {
    const result: any[] = [];

    data.reduce((map, item) => {
      const optionsItem = {
        ...item,
        label: `${item.describe}(${item.value})`,
        value: item.value
      };
      const options = map.get(item.skillId);

      if (options) {
        options.push(optionsItem);
      } else {
        map.set(item.skillId, [optionsItem]);
      }
      return map;
    }, new Map()).forEach((value, key) => {
      result.push({
        label: key,
        options: value
      });
    });
    return result;
  }

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Select
      defaultValue='lucy'
      style={{ width: 200 }}
      onChange={handleChange}
      options={dealData(data)}
    />
  );
};

export default App;
