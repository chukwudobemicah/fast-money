import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fieldsets: [
    {
      name: "siteOne",
      title: "Site One",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "siteTwo",
      title: "Site Two",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "siteThree",
      title: "Site Three",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "siteFour",
      title: "Site Four",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "siteFive",
      title: "Site Five",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    // Site One Fields
    defineField({
      name: "domainNameOne",
      title: "Domain Name",
      description:
        "Enter the domain name for this site (e.g., example.com) - for reference only",
      type: "string",
      fieldset: "siteOne",
    }),
    defineField({
      name: "instructionTextOne",
      title: "Instruction Text",
      type: "string",
      initialValue: "Click the button below to join",
      fieldset: "siteOne",
    }),
    defineField({
      name: "buttonTextOne",
      title: "Button 1 Text",
      type: "string",
      initialValue: "Get Access",
      fieldset: "siteOne",
    }),
    defineField({
      name: "buttonLinkOne",
      title: "Button 1 Link",
      type: "url",
      initialValue: "https://chat.whatsapp.com/E6CVZew1xHFLNHKELbODWC?mode=wwt",
      fieldset: "siteOne",
    }),
    defineField({
      name: "buttonTextOneB",
      title: "Button 2 Text",
      type: "string",
      initialValue: "Learn More",
      fieldset: "siteOne",
    }),
    defineField({
      name: "buttonLinkOneB",
      title: "Button 2 Link",
      type: "url",
      initialValue: "https://example.com",
      fieldset: "siteOne",
    }),

    // Site Two Fields
    defineField({
      name: "domainNameTwo",
      title: "Domain Name",
      description:
        "Enter the domain name for this site (e.g., example.com) - for reference only",
      type: "string",
      fieldset: "siteTwo",
    }),
    defineField({
      name: "instructionTextTwo",
      title: "Instruction Text",
      type: "string",
      initialValue: "Click the button below to join",
      fieldset: "siteTwo",
    }),
    defineField({
      name: "buttonTextTwo",
      title: "Button 1 Text",
      type: "string",
      initialValue: "Get Access",
      fieldset: "siteTwo",
    }),
    defineField({
      name: "buttonLinkTwo",
      title: "Button 1 Link",
      type: "url",
      initialValue: "https://chat.whatsapp.com/E6CVZew1xHFLNHKELbODWC?mode=wwt",
      fieldset: "siteTwo",
    }),
    defineField({
      name: "buttonTextTwoB",
      title: "Button 2 Text",
      type: "string",
      initialValue: "Learn More",
      fieldset: "siteTwo",
    }),
    defineField({
      name: "buttonLinkTwoB",
      title: "Button 2 Link",
      type: "url",
      initialValue: "https://example.com",
      fieldset: "siteTwo",
    }),

    // Site Three Fields
    defineField({
      name: "domainNameThree",
      title: "Domain Name",
      description:
        "Enter the domain name for this site (e.g., example.com) - for reference only",
      type: "string",
      fieldset: "siteThree",
    }),
    defineField({
      name: "instructionTextThree",
      title: "Instruction Text",
      type: "string",
      initialValue: "Click the button below to join",
      fieldset: "siteThree",
    }),
    defineField({
      name: "buttonTextThree",
      title: "Button 1 Text",
      type: "string",
      initialValue: "Get Access",
      fieldset: "siteThree",
    }),
    defineField({
      name: "buttonLinkThree",
      title: "Button 1 Link",
      type: "url",
      initialValue: "https://chat.whatsapp.com/E6CVZew1xHFLNHKELbODWC?mode=wwt",
      fieldset: "siteThree",
    }),
    defineField({
      name: "buttonTextThreeB",
      title: "Button 2 Text",
      type: "string",
      initialValue: "Learn More",
      fieldset: "siteThree",
    }),
    defineField({
      name: "buttonLinkThreeB",
      title: "Button 2 Link",
      type: "url",
      initialValue: "https://example.com",
      fieldset: "siteThree",
    }),

    // Site Four Fields
    defineField({
      name: "domainNameFour",
      title: "Domain Name",
      description:
        "Enter the domain name for this site (e.g., example.com) - for reference only",
      type: "string",
      fieldset: "siteFour",
    }),
    defineField({
      name: "instructionTextFour",
      title: "Instruction Text",
      type: "string",
      initialValue: "Click the button below to join",
      fieldset: "siteFour",
    }),
    defineField({
      name: "buttonTextFour",
      title: "Button 1 Text",
      type: "string",
      initialValue: "Get Access",
      fieldset: "siteFour",
    }),
    defineField({
      name: "buttonLinkFour",
      title: "Button 1 Link",
      type: "url",
      initialValue: "https://chat.whatsapp.com/E6CVZew1xHFLNHKELbODWC?mode=wwt",
      fieldset: "siteFour",
    }),
    defineField({
      name: "buttonTextFourB",
      title: "Button 2 Text",
      type: "string",
      initialValue: "Learn More",
      fieldset: "siteFour",
    }),
    defineField({
      name: "buttonLinkFourB",
      title: "Button 2 Link",
      type: "url",
      initialValue: "https://example.com",
      fieldset: "siteFour",
    }),

    // Site Five Fields
    defineField({
      name: "domainNameFive",
      title: "Domain Name",
      description:
        "Enter the domain name for this site (e.g., example.com) - for reference only",
      type: "string",
      fieldset: "siteFive",
    }),
    defineField({
      name: "instructionTextFive",
      title: "Instruction Text",
      type: "string",
      initialValue: "Click the button below to join",
      fieldset: "siteFive",
    }),
    defineField({
      name: "buttonTextFive",
      title: "Button 1 Text",
      type: "string",
      initialValue: "Get Access",
      fieldset: "siteFive",
    }),
    defineField({
      name: "buttonLinkFive",
      title: "Button 1 Link",
      type: "url",
      initialValue: "https://chat.whatsapp.com/E6CVZew1xHFLNHKELbODWC?mode=wwt",
      fieldset: "siteFive",
    }),
    defineField({
      name: "buttonTextFiveB",
      title: "Button 2 Text",
      type: "string",
      initialValue: "Learn More",
      fieldset: "siteFive",
    }),
    defineField({
      name: "buttonLinkFiveB",
      title: "Button 2 Link",
      type: "url",
      initialValue: "https://example.com",
      fieldset: "siteFive",
    }),
  ],
});
