//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers
function Toggle(props) {
  const [value, setValue] = useState(props.value ?? false);

  return (
    <Uu5Elements.Toggle
      value={value}
      onChange={(e) => setValue(e.data.value)}
      {...props}
    />

  );
}

const ShoppingListDetail = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingListDetail",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps
  render() {
    //@@viewOn:render

    return <div>
      <div>
        <Uu5Elements.GridTemplate
          contentMap={{
            header: <Uu5Elements.Box className={Config.Css.css({ padding: 16 })}><Uu5Elements.Button size="xl">Back</Uu5Elements.Button></Uu5Elements.Box>,
            name: <Uu5Elements.Box className={Config.Css.css({ padding: 25 })}>Name</Uu5Elements.Box>,
            invite: <Uu5Elements.Box className={Config.Css.css({ padding: 16 })}><Uu5Elements.Button size="m">Invite</Uu5Elements.Button></Uu5Elements.Box>,
            plus: <Uu5Elements.Box className={Config.Css.css({ padding: 16 })}><Uu5Elements.Button size="m">+</Uu5Elements.Button></Uu5Elements.Box>,
            bought: <Uu5Elements.Box className={Config.Css.css({ padding: 16 })}><Toggle label="Bought" box /></Uu5Elements.Box>,
            item: <Uu5Elements.Box className={Config.Css.css({ padding: 25 })}>ITEM</Uu5Elements.Box>,
            trash: <Uu5Elements.Box className={Config.Css.css({ padding: 16 })}><Uu5Elements.Button size="m">-</Uu5Elements.Button></Uu5Elements.Box>,
            
          }}
          templateAreas={`
                  header header header header header header header header header header header header header header header header,
                  name name name name name name name name name name name name name name invite plus,
                  bought item item item item item item item item item item item item item item trash
                `}
          templateColumns="repeat(16, 1fr)"
          rowGap={8}
          columnGap={8}
        /></div>
        
    </div>;

    //@@viewOff:render
  }
});

//@@viewOn:exports
export { ShoppingListDetail };
export default ShoppingListDetail;
//@@viewOff:exports
