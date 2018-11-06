const countries = [
    {
      name: "Malta",
      acronym: "MA",
      images:['https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png']
    },
    {
      name: "Zimbabwe",
      acronym: "ZA",
      images:['https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png']
    },
    {
      name: "Irlanda",
      acronym: "IR",
      images:['https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png']
    },
    {
      name: "Coreia",
      acronym: "KR",
      images:['https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png']
    },
    {
      name: "Nordeste de Amaralina",
      acronym: "NA",
      images:['https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png']
    },
    {
      name: "Buraco do Vegeta",
      acronym: "BV",
      images:['https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png']
    }
    
  ];

const languages = ["Inglês", "Italiano", "Francês"];

const filters = [
  {
      label: "Teste",
      selector: "test",
      options: [
          {
              value: "memes",
              name: "Roberto"
          },
          {
              value: "roberto",
              name: "Baptista"
          }
      ],
      mode: "multiple"
  },
  {
      label: "Países",
      selector: "country",
      options: [
          {
              value: "ZA",
              name: "Zimbabwe"
          },
          {
              value: "roberto",
              name: "Baptista"
          }
      ],
      mode: "default"
  },
  {
      label: "Xd",
      selector: "xd",
      options: [
          {
              value: "memes",
              name: "Memes"
          },
          {
              value: "roberto",
              name: "Baptista"
          }
      ],
      mode: "default"
  }
]

export {
    countries,
    languages,
    filters
}