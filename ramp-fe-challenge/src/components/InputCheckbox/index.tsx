import classNames from "classnames"
import { check } from "prettier"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"


export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)
  // console.log("change");
  // console.log(id)
  // console.log(checked)
  // console.log(disabled)
  // console.log(inputId)
  // console.log(InputCheckbox);
  // console.log(Transactions);

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
        onClick={() => {
          onChange(!checked) 
          // onChange(!disabled);
          // console.log(checked)
          
          // console.log(disabled)
        }}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => {
          // onChange(!checked)
          // console.log(checked)
        }}
        // onClick={() => {
        //   onChange(!checked) 
        //   // onChange(!disabled);
        //   // console.log(checked)
          
        //   // console.log(disabled)
        // }}
      />
    </div>
  )
}
