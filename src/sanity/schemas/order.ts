export default {
  name: "order",
  title: "Orders & Tracking",
  type: "document",
  fields: [
    {
      name: "orderNumber",
      title: "Order Number",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      description: "e.g., HC-2026-001",
    },
    {
      name: "customer",
      title: "Customer Details",
      type: "object",
      fields: [
        { name: "name", title: "Full Name", type: "string" },
        { name: "phone", title: "WhatsApp Number", type: "string", description: "Include country code (e.g., +91...)" },
        { name: "email", title: "Email Address", type: "string" },
      ],
    },
    {
      name: "artwork",
      title: "Artwork Reference",
      type: "reference",
      to: [{ type: "artwork" }],
      description: "Link to the artwork being purchased",
    },
    {
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "To Be Done", value: "to_be_done" },
          { title: "In Progress", value: "in_progress" },
          { title: "Shipped", value: "shipped" },
        ],
        layout: "radio",
      },
      initialValue: "to_be_done",
    },
    {
      name: "specifics",
      title: "Order Specifics / Notes",
      type: "text",
      description: "Customizations, framing details, or special requests.",
    },
    {
      name: "updates",
      title: "Progress Updates",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "date", title: "Update Date", type: "datetime", initialValue: (new Date()).toISOString() },
            { 
              name: "content", 
              title: "Update Content", 
              type: "text", 
              validation: (Rule: any) => Rule.max(1000).warning("Keep updates concise (approx 200 words).") 
            },
          ]
        }
      ],
      validation: (Rule: any) => Rule.max(5).error("Maximum 5 updates per order."),
    },
    {
      name: "whatsappOptIn",
      title: "WhatsApp Notifications",
      type: "boolean",
      initialValue: false,
      description: "Send automated updates to the customer via WhatsApp.",
    },
  ],
  preview: {
    select: {
      title: "orderNumber",
      subtitle: "customer.name",
      status: "status",
    },
    prepare({ title, subtitle, status }: any) {
      const statusMap: any = {
        to_be_done: "⏳ To Be Done",
        in_progress: "🎨 In Progress",
        shipped: "📫 Shipped",
      };
      return {
        title: `Order: ${title}`,
        subtitle: `${subtitle} (${statusMap[status] || status})`,
      };
    },
  },
};
