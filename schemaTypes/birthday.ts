export const birthdays ={
    name : 'birthdays',
    title:'Birthdays',
    type:'document',
    fields:[
        {
                name: 'birthday',
                type: 'string',
                title:'Birthday'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
              hotspot: true
            },
            
          },
          {
            name: 'meta_description',
            title:'Meta_Description',
            type: 'array',
            of:[{type:'string'}]
          }
    ]
}