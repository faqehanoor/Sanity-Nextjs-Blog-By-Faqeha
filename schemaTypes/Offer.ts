export default {
    name: "Offer",
    type: "document",
    title: "Offer",
    fields: [ 
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'overview',
        type: 'string',
        title: 'Overview',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'slug',
        options: {
            source: 'title',
        } 
      },

      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
            hotspot: true,
        }
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
        {
            type: 'block',
        },


        {
            type: 'image',
            fields: [{
                type: 'text',
                name: "alt",
                title: 'Alternative text'
            }]
        }
    ]
      },




    ],
  };
  