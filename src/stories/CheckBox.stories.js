import { CheckBox } from "components";
export default {
  title: "application8/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  label: "Checkbox",
  shape: "RoundedBorder3",
  variant: "OutlineBluegray200",
  size: "sm",
  inputClassName: "mr-1",
};
