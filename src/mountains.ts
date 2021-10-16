export interface Mountain {
    name: string;
    height: number;
}

const mountains = [
    {
        name: 'Kilimanjaro',
        height: 19341,
    },
    {
        name: "Everest",
        height: 29029,
    },
    {
        name: "Denali",
        height: 20310,
    }
];

let tallest = 0;

function findNameOfTallestMountain(mountains: Mountain[]) {
  for( let i = 0; i < mountains.length; i++){
    if (mountains[i].height > tallest){
        tallest = mountains[i].height;
    } else {
        return "";
    }
    findNameOfTallestMountain(mountains) 
        print();
    }
  }
