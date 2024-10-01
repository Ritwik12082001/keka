export const global_sidebar_components = {
    name: 'global_sidebar_components',
    title: 'Global Sidebar Components',
    type: 'document',
    fields:[
        {
            name : 'component_name',
            title:'Component Name',
            type: 'string'
        },
        {
            name : 'component_image',
            title:'Component Image',
            type:  'image',
            options: {
                hotspot: true 
              },
        }
    ]
}