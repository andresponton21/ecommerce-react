const productsData = [
    {
      id: 0,
      name:'Fitness Ropes',
      price: { before: 150, after: 119 },
      filters: [
         {
         filterName:`Colours`,
         filterOptions:[ `Red`, `Black`, `Grey` ]
        },
        {
         filterName:`Sizes`,
         filterOptions:[ `S`, `M`, `L` ]
        },  
      ],
      photo: `ropes`,
      description: `You'll train the muscles in your upper back, arms, abs, back, 
      glutes and if you incorporate jumps, lunges, and squats`,
      linkTo:`Pages/product.html`,
      category: ['conditioning', 'calisthenics'],
      rating: 'four'
    }, 
    {
      id: 1,
      name:'Core and Stability Balls',
      price: { before: 89, after: 69 },
      filters: [
         {
         filterName:`Colours`,
         filterOptions:[ `Red`, `Black`, `Blue` ]
        },
        {
         filterName:`Sizes`,
         filterOptions:[ `S`, `M`, `L` ]
        },  
      ],
      photo: `stability_core`,
      description: `Adding core strengthening to your exercise routine can help protect your back and neck. 
      By boosting your core strength`,
      linkTo:`Pages/product.html`,
      category: ['conditioning', 'calisthenics'],
      rating: 'five'
    },
  
      {
        id: 2,
        name:'Indoor Bikes',
        price: { before: 780, after: 619 },
        filters: [
            {
            filterName:`Features`,
            filterOptions:[ `Standar`, `Premium`, `Enhanced` ]
           },
           {
            filterName:`Sizes`,
            filterOptions:[ `S`, `M`, `L` ]
           },  
         ],
        photo: `bike`,
        description: `These help you shed fat, improve your heart health, and boost your muscle endurance. 
        Your legs will get a serious workout.`,
        linkTo:`Pages/product.html`,
        category: ['cardio'],
        rating: 'four'
      }, 
      {
        id: 3,
        name:'Dumbbells',
        price: { before: 150, after: 90 },
        filters: [
            {
            filterName:`Weight`,
            filterOptions:[ `5 kgs`, `20 kgs`, `30 kgs` ]
           },
           {
            filterName:`Sizes`,
            filterOptions:[ `S`, `M`, `L` ]
           }, 
          
         ],
        photo: `dumbell`,
        description: `Dumbbells can give you a great full body workout and are ever preferred for certain exercises by some. 
        For each body part their is a wide variety of dumbbell movements that can be preformed`,
        linkTo:`Pages/product.html`,
        category: ['dumbbells'],
        rating: 'three'
      }, 
      {
        id: 4,
        name:'Treadmills',
        price: { before: 2140, after: 1240 },
        filters: [
            {
            filterName:`Features`,
            filterOptions:[ `Standar`, `Premium`, `Enhanced` ]
           },
           {
            filterName:`Sizes`,
            filterOptions:[ `S`, `M`, `L` ]
           },  
         ],
        photo: `treadmill`,
        description: `Walking or running on a treadmill is an excellent source of exercise 
        that puts less stress on the body than walking or running on a flat surface outdoors`,
        linkTo:`Pages/product.html`,
        category: ['cardio'],
        rating: 'three'
      }, 
      {
        id: 5,
        name:'Mats',
        price: { before: 39, after: 29 },
        filters: [
            {
            filterName:`Colours`,
            filterOptions:[ `Magenta`, `Black`, `Pink` ]
           },
           {
            filterName:`Sizes`,
            filterOptions:[ `M`, `L`, `XL` ]
           },  
         ],
        photo: `matt`,
        description: `Is perfect for a Enhanced body strength, 
        HIIT workouts, crunches, pushups and yoga`,
        linkTo:`Pages/product.html`,
        category: ['conditioning', 'calisthenics'],
        rating: 'two'
      }, 
      {
        id: 6,
        name:'Boxing Gloves',
        price: { before: 99, after: 79 },
        filters: [
           {
           filterName:`Colours`,
           filterOptions:[ `Red`, `Black`, `Yellow` ]
          },
          {
           filterName:`Sizes`,
           filterOptions:[ `S`, `M`, `L` ]
          },  
        ],
        photo: `boxing`,
        description: `cushioned gloves that boxers wear during matches and training sessions. 
        They're designed to protect the wearer and his or her opponent from injuries while fighting`,
        linkTo:`Pages/product.html`,
        category: ['conditioning', 'calisthenics'],
        rating: 'one'
      }, 
      {
        id: 7,
        name:'Leggings',
        price: { before: 89, after: 39 },
        filters: [
           {
           filterName:`Colours`,
           filterOptions:[ `Blue`, `Black`, `Pink` ]
          },
          {
           filterName:`Sizes`,
           filterOptions:[ `S`, `M`, `L` ]
          },  
        ],
        photo: `clothing`,
        description: `worn for warmth and protection by both men and women throughout the centuries. 
        The linen pantalettes worn by girls and women under crinolines in the mid-19th century were also a 
        form of leggings, and were originally two separate garments`,
        linkTo:`Pages/product.html`,
        category: ['conditioning'],
        rating: 'four'

      }, 
      {
        id: 8,
        name:'Skateboards',
        price: { before: 109, after: 99 },
        filters: [
           {
           filterName:`Designs`,
           filterOptions:[ `Oldschool`, `Modern`, `Custom` ]
          },
          {
           filterName:`Sizes`,
           filterOptions:[ `S`, `M`, `L` ]
          },  
        ],
        photo: `outdoors`,
        description: `sports scientists have confirmed that skateboarding is a complete workout in itself. 
        It not only works the cardiovascular system but also builds muscular strength. 
        The core of a skateboarder plays a very crucial role`,
        linkTo:`Pages/product.html`,
        category: ['conditioning'],
        rating: 'five'
      }, 
      {
        id: 9,
        name:'Lifting Bars',
        price: { before: 399, after: 250 },
        filters: [
            {
            filterName:`Colours`,
            filterOptions:[ `Red`, `Black`, `Grey` ]
           },
           {
            filterName:`Sizes`,
            filterOptions:[ `M`, `L`, `XL` ]
           },  
         ],
        photo: `liftbar`,
        description: `A piece of exercise equipment used in weight training, 
        bodybuilding, weightlifting and powerlifting`,
        linkTo:`Pages/product.html`,
        category: ['weights'],
        rating: 'two'
      }, 
      {
        id: 10,
        name:'Kettlebells',
        price: { before: 150, after: 129 },
        filters: [
           {
           filterName:`Colours`,
           filterOptions:[ `Red`, `Black`, `Grey` ]
          },
          {
           filterName:`Weigh`,
           filterOptions:[ `5`, `10`, `20` ]
          },  
        ],
        photo: `kettlebells`,
        description: `You'll train the muscles in your upper back, arms, abs, back, 
        glutes and if you incorporate jumps, lunges, and squats`,
        linkTo:`Pages/product.html`,
        category: ['conditioning', 'calisthenics'],
        rating: 'four'
      }, 
      {
        id: 11,
        name:'Incline Bench',
        price: { before: 89, after: 79 },
        filters: [
           {
           filterName:`Colours`,
           filterOptions:[ `Red`, `Black`, `Blue` ]
          },
          {
           filterName:`Sizes`,
           filterOptions:[ `S`, `M`, `L` ]
          },  
        ],
        photo: `inclinebench`,
        description: `Adding core strengthening to your exercise routine can help protect your back and neck. 
        By boosting your core strength`,
        linkTo:`Pages/product.html`,
        category: ['conditioning', 'calisthenics'],
        rating: 'five'
      },
    
        {
          id: 12,
          name:'Ellipticals',
          price: { before: 780, after: 715 },
          filters: [
              {
              filterName:`Features`,
              filterOptions:[ `Standar`, `Premium`, `Enhanced` ]
             },
             {
              filterName:`Sizes`,
              filterOptions:[ `S`, `M`, `L` ]
             },  
           ],
          photo: `ellipticals`,
          description: `These help you shed fat, improve your heart health, and boost your muscle endurance. 
          Your legs will get a serious workout.`,
          linkTo:`Pages/product.html`,
          category: ['cardio'],
          rating: 'four'
        }, 
        {
          id: 13,
          name:'Speed Bag',
          price: { before: 150, after: 98 },
          filters: [
              {
              filterName:`Colour`,
              filterOptions:[ `black`, `grey`, `red` ]
             },
             {
              filterName:`Sizes`,
              filterOptions:[ `S`, `M`, `L` ]
             }, 
            
           ],
          photo: `speedbag`,
          description: `Can give you a great full body workout and are ever preferred for certain exercises by some. 
          For each body part their is a wide variety of dumbbell movements that can be preformed`,
          linkTo:`Pages/product.html`,
          category: ['dumbbells', 'cardio'],
          rating: 'three'
        }, 
        {
          id: 14,
          name:'Rowers',
          price: { before: 2140, after: 1541 },
          filters: [
              {
              filterName:`Features`,
              filterOptions:[ `Standar`, `Premium`, `Enhanced` ]
             },
             {
              filterName:`Sizes`,
              filterOptions:[ `S`, `M`, `L` ]
             },  
           ],
          photo: `rower`,
          description: `Is an excellent source of exercise 
          that puts less stress on the body than walking or running on a flat surface outdoors`,
          linkTo:`Pages/product.html`,
          category: ['cardio'],
          rating: 'three'
        }, 
        {
          id: 15,
          name:'Plates',
          price: { before: 39, after: 35 },
          filters: [
              {
              filterName:`Colours`,
              filterOptions:[ `Magenta`, `Black`, `Pink` ]
             },
             {
              filterName:`Sizes`,
              filterOptions:[ `M`, `L`, `XL` ]
             },  
           ],
          photo: `plates`,
          description: `Is perfect for a Enhanced body strength, 
          HIIT workouts, crunches`,
          linkTo:`Pages/product.html`,
          category: ['conditioning', 'calisthenics'],
          rating: 'two'
        }, 
        {
          id: 16,
          name:'Ab wheel',
          price: { before: 99, after: 81 },
          filters: [
             {
             filterName:`Colours`,
             filterOptions:[ `Red`, `Black`, `Yellow` ]
            },
            {
             filterName:`Sizes`,
             filterOptions:[ `S`, `M`, `L` ]
            },  
          ],
          photo: `wheel`,
          description: `Core workout for your abs and chest feel the burn in your abs, no more crunches`,
          linkTo:`Pages/product.html`,
          category: ['conditioning', 'calisthenics'],
          rating: 'one'
        }, 
        {
          id: 17,
          name:'Push Up Bar',
          price: { before: 89, after: 54 },
          filters: [
             {
             filterName:`Colours`,
             filterOptions:[ `Blue`, `Black`, `Pink` ]
            },
            {
             filterName:`Sizes`,
             filterOptions:[ `S`, `M`, `L` ]
            },  
          ],
          photo: `pushbar`,
          description: ` protection by both men and women throughout the centuries. 
          do your push ups without the pain of the floor and were originally two separate garments`,
          linkTo:`Pages/product.html`,
          category: ['conditioning'],
          rating: 'four'
  
        }, 
        {
          id: 18,
          name:'Lifting belt',
          price: { before: 109, after: 98 },
          filters: [
             {
             filterName:`Material`,
             filterOptions:[ `Leather`, `Modern`, `Custom` ]
            },
            {
             filterName:`Sizes`,
             filterOptions:[ `S`, `M`, `L` ]
            },  
          ],
          photo: `belt`,
          description: `sports scientists have confirmed that belts are safer. 
          It not only works the cardiovascular system but also builds muscular strength. 
          The core of a skateboarder plays a very crucial role`,
          linkTo:`Pages/product.html`,
          category: ['conditioning'],
          rating: 'five'
        }, 
        {
          id: 19,
          name:'Aerobic Steps',
          price: { before: 399, after: 258 },
          filters: [
              {
              filterName:`Colours`,
              filterOptions:[ `Red`, `Black`, `Grey` ]
             },
             {
              filterName:`Sizes`,
              filterOptions:[ `M`, `L`, `XL` ]
             },  
           ],
          photo: `steps`,
          description: `A piece of exercise equipment used in weight training, 
          bodybuilding, weightlifting and powerlifting`,
          linkTo:`Pages/product.html`,
          category: ['weights', 'cardio'],
          rating: 'two'
        }, 
  ];

  export default productsData