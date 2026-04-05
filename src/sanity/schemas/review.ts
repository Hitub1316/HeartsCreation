import { type SchemaTypeDefinition } from 'sanity'

const review: SchemaTypeDefinition = {
  name: 'review',
  title: 'Patron Reviews',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Patron Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Review Content',
      type: 'text',
      validation: (Rule) => Rule.required().max(500),
    },
    {
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(5),
    },
    {
      name: 'approved',
      title: 'Approved by Admin',
      type: 'boolean',
      initialValue: false,
      description: 'Reviews will not appear on the website until approved.',
    },
    {
      name: 'date',
      title: 'Review Date',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'content',
      approved: 'approved',
    },
    prepare({ title, subtitle, approved }) {
      return {
        title: `${title} ${approved ? '✅' : '⏳'}`,
        subtitle,
      }
    },
  },
}

export default review
