import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website Content')
    .items([
      // Our Singleton Site Settings
      S.listItem()
        .title('Global Site Settings')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      // The rest of our content
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings'].includes(listItem.getId() as string)
      ),
    ])
