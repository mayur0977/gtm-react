import "./App.css";

import TagManager from "react-gtm-module";

function App() {
  TagManager.initialize({ gtmId: "GTM-NKM5DRZ" });
  const clickHandle1 = () => {
    TagManager.dataLayer({
      dataLayer: {
        event: "click_custom_button_1",
        category: "button click 1",
      },
    });
  };
  const clickHandle2 = () => {
    TagManager.dataLayer({
      dataLayer: {
        event: "click_custom_button_2",
        category: "button click 2",
      },
    });
  };
  const clickHandle = () => {
    TagManager.dataLayer({
      dataLayer: {
        event: "click",
        category: " click 2",
      },
    });
  };
  const clickHandleAnother = () => {
    TagManager.dataLayer({
      dataLayer: {
        event: "not_added_event",
        category: " click 2",
      },
    });
  };
  return (
    <div className="App">
      <button onClick={() => clickHandle1()}>GTM check custom 1</button>
      <button onClick={() => clickHandle2()}>GTM check custom 1</button>
      <button onClick={() => clickHandle()}>click default button</button>
      <button onClick={() => clickHandleAnother()}>
        click default not added event
      </button>
    </div>
  );
}

export default App;
