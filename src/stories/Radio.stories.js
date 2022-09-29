import { Radio } from "components";
export default {
  title: "application8/Radio",
  component: Radio,
};

export const SampleRadio = (args) => <Radio {...args} />;

SampleRadio.args = {
  label: "Radio",
  shape: "RoundedBorder8",
  variant: "radio0",
  size: "sm",
  inputClassName: "mr-1",
};
