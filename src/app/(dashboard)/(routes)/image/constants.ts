import * as Z from "zod";

export const formSchema = Z.object({
  prompt: Z.string().min(1, {
    message: "Image Prompt is required.",
  }),
  amount: Z.string().min(1),
  resolution: Z.string().min(1),
});

export const amountOptions = [
  {
    value: "1",
    label: "1 Photo",
  },
  {
    value: "2",
    label: "2 Photo",
  },
  {
    value: "3",
    label: "3 Photo",
  },
  {
    value: "4",
    label: "4 Photo",
  },
  {
    value: "5",
    label: "5 Photo",
  },
];

export const resolutionOptions = [
  {
    value: "256x256",
    label: "256 x 256",
  },
  {
    value: "512x512",
    label: "512 x 512",
  },
  {
    value: "1024x1024",
    label: "1024 x 1024",
  },
];
