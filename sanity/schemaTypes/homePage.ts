import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    // Site One Fields
    defineField({
      name: "instructionTextOne",
      title: "Instruction Text (Site One)",
      type: "string",
      initialValue: "Click the button below to join",
    }),
    defineField({
      name: "buttonTextOne",
      title: "Button Text (Site One)",
      type: "string",
      initialValue: "Get Access",
    }),
    defineField({
      name: "buttonLinkOne",
      title: "Button Link (Site One)",
      type: "url",
      initialValue: "https://chat.whatsapp.com/E6CVZew1xHFLNHKELbODWC?mode=wwt",
    }),

    // Site Two Fields
    defineField({
      name: "instructionTextTwo",
      title: "Instruction Text (Site Two)",
      type: "string",
      initialValue: "Click the button below to join",
    }),
    defineField({
      name: "buttonTextTwo",
      title: "Button Text (Site Two)",
      type: "string",
      initialValue: "Get Access",
    }),
    defineField({
      name: "buttonLinkTwo",
      title: "Button Link (Site Two)",
      type: "url",
      initialValue: "https://chat.whatsapp.com/E6CVZew1xHFLNHKELbODWC?mode=wwt",
    }),
  ],
});
