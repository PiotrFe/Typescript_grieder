import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList} from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charCollection = new CharactersCollection("XaYab");
charCollection.sort()
console.log(charCollection.data);

