import { Minus, Plus } from "@/utils/icons";
import styles from "../styles";

const colors = [
  "#ffffff",
  "#000000",
  "#AAB2BD",
  "#FCCACD",
  "#556B2F",
  "#CD5C5C",
  "#483D8B",
  "#5D9CEC",
  "#F1C40F",
  "#964B00",
  "#FAEBD7",
];

const Colors = ({ values, handleChange, filterName, handleFilterName }) => {
  return (
    <div className="mt-3 lg:mt-6">
      <h3
        className={`${styles.filterHeading}`}
        onClick={() => handleFilterName("colors")}
      >
        <span>Colors</span>
        <span className="lg:hidden">
          {filterName === "colors" ? <Minus /> : <Plus />}
        </span>
      </h3>
      <div
        className={`${
          filterName === "colors" ? "max-h-[350px]" : "max-h-0 lg:max-h-[350px]"
        } transition-all duration-500 ease-in-out overflow-hidden`}
      >
        <div className="flex gap-2 gap-y-3 flex-wrap">
          {colors.map((color) => (
            <label htmlFor={color} key={color}>
              <input
                type="checkbox"
                name="colors"
                id={color}
                value={color}
                onChange={handleChange}
                checked={values.colors.includes(color)}
                className="appearance-none peer hidden"
              />
              <div className="h-7 w-7 p-0.5 cursor-pointer hover:border-black hover:shadow-md hover:scale-110 transition-all duration-300 rounded-full peer-checked:scale-110 peer-checked:opacity-90 peer-checked:border-2 peer-checked:border-black">
                <div
                  style={{ backgroundColor: color }}
                  className="w-full h-full rounded-full border border-gray-500"
                />
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colors;
