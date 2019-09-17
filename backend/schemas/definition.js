export default {
  name: "definition",
  type: "document",
  title: "Stammespråk",
  fields: [
    {
      name: "definition",
      title: "definisjon",
      type: "text"
    },
    {
      name: "word",
      title: "ord",
      type: "text"
    },
    {
      name: "user",
      title: "oppretter",
      type: "text"
    }
  ],

  preview: {
    select: {
      title: "word",
      subtitle: "user"
    }
  }
};
