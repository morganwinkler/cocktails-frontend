import { DrinksIndex } from './DrinksIndex';
import { DrinksNew } from './DrinksNew';

export function Content() {
  let drinks = [
    {
      id: 1,
      name: "Drink One",
      mixologist: "Mike",
      image_url: "https://media.istockphoto.com/id/1216205052/photo/blue-old-fashioned-cocktail-with-cherry-on-the-rustic-background.webp?b=1&s=170667a&w=0&k=20&c=06KnDW7kDynqlpnR644IYljQ05aaTGD5Wzo_ESpfvNA=",
    },
    {
      id: 2,
      name: "Drink Two",
      mixologist: "Mo",
      image_url: "https://media.istockphoto.com/id/1167570076/photo/tropical-cocktails-near-swimming-pool.webp?b=1&s=170667a&w=0&k=20&c=P_tn8hl_V94CVR3l_72-DVyaKTETIHkCKnZCr5Krc18=",
    },
    {
      id: 3,
      name: "Drink Three",
      mixologist: "Shayna",
      image_url: "https://media.istockphoto.com/id/1172084897/photo/women-raising-a-glasses-of-spritz-at-the-dinner-table.webp?b=1&s=170667a&w=0&k=20&c=pluXQFh8t8CraUEFUSB7XE6HV38M7UqIzYaUqcbPykQ=",
    },
  ];

  return (
    <div>
      <DrinksNew />
      <DrinksIndex drinks={drinks} />
    </div>
  );
}
