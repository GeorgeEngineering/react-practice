import { Anchor } from "antd";

import "./navigation.css";

const NavigationBarComponent = () => {
  return (
    <div>
      <div>
        <Anchor
          direction="horizontal"
          items={[
            {
              key: "todos",
              href: "#todos",
              title: "Todos",
            },
            {
              key: "groceries",
              href: "#groceries",
              title: "Groceries",
            },
            {
              key: "holidays",
              href: "#holidays",
              title: "Holidays",
            },
          ]}
        />
      </div>
      <div>
        <div
          id="todos"
        />
        <div
          id="groceries"
        />
        <div
          id="holidays"
        />
      </div>
    </div>
  );
};

export default NavigationBarComponent;
