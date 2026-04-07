import { defineField, defineType, type Rule } from 'sanity'

export default defineType({
  name: 'review',
  title: 'Patron Reviews',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Patron Name',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Review Content',
      type: 'text',
      validation: (rule: Rule) => rule.required().max(500),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      initialValue: 5,
      validation: (rule: Rule) => rule.min(1).max(5),
    }),
    defineField({
      name: 'approved',
      title: 'Approved by Admin',
      type: 'boolean',
      initialValue: false,
      description: 'Reviews will not appear on the website until approved.',
    }),
    defineField({
      name: 'date',
      title: 'Review Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      content: 'content',
      approved: 'approved',
    },
    prepare({ title, content, approved }: any) {
      return {
        title: `${title} ${approved ? '✅' : '⏳'}`,
        subtitle: content,
      }
    },
  },
})
