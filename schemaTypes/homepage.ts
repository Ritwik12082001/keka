export const homepage ={
    name : 'homepage',
    title:'Homepage',
    type:'document',
    fields:[
        {
        
                name: 'title',
                type: 'string',
                title:'Title'
            
        },
        {
                name: 'homepage_navbar_components',
                title:'Homepage Navbar Components',
                type: 'array',
                of :[{type:'string'}]
        },
        {
            name: 'homepage_cards',
            title: 'Homepage Cards',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [{ type: 'cards' }], // Reference to the card document
              },
            ],
        },
        {
        
            name: 'announcement',
            title:'Announcement',
            type: 'array',
            of:[{type:'string'}],
        
    },
    {
        name: 'homepage_birthdays',
        title: 'Homepage Birthdays',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'birthdays' }], // Reference to the birthdays document
          },
        ],
    },

    ],
}