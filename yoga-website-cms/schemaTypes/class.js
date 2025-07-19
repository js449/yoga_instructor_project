export default {
  name: 'class',
  title: 'Class',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Class Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Class Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'instructor',
      title: 'Instructor',
      type: 'string',
    },
    {
      name: 'time',
      title: 'Time',
      type: 'string', // or "datetime" if you prefer
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
