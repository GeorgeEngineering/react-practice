import { Anchor } from "antd";

import "./header.less";

const NavigationBar = () => {
  return (
    <>
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
          className="todos"
        />
        <div
          id="groceries"
          className="groceries"
        />
        <div
          id="holidays"
          className="holidays"
        />
      </div>
    </>
  );
};

export default NavigationBar;
