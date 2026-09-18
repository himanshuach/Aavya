export interface CustomizationStep {
  step: string;
  title: string;
  description: string;
}

export const CUSTOMIZATION_PROCESS: CustomizationStep[] = [
  {
    step: "01",
    title: "Tell Us What You Need",
    description: "Share your business concept, hospitality venue, or event context with our Patna team.",
  },
  {
    step: "02",
    title: "Select a Bottle Format",
    description: "Choose from our sculpted 250 ml, 1 L, or 2 L bottles according to your service setting.",
  },
  {
    step: "03",
    title: "Discuss Your Branding",
    description: "Integrate your corporate logo, bespoke color palette, and bespoke typography seamlessly.",
  },
  {
    step: "04",
    title: "Finalize Your Bottle",
    description: "Approve label mockups directly with DPB Beverages for direct delivery to your tables.",
  },
];
