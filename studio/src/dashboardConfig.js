export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fad8c7b0468d382923af7c7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-m644bii4',
                  apiId: 'd0b2c59c-b824-40fc-a295-2d46f9266d3d'
                },
                {
                  buildHookId: '5fad8c7b0a2d438403160774',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-inaqf81t',
                  apiId: 'dbdc4b62-528e-49ed-a918-5b5bf8246828'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vadoche/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-inaqf81t.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
