export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      description: 'Brief biography of Jimmy',
    },
    {
      name: 'mission',
      title: 'Mission',
      type: 'text',
    },
    {
      name: 'philosophy',
      title: 'Yoga Philosophy',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
