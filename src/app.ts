import {somma, sottrazione} from "./matematica"; // import single function
import * as mate from "./matematica"; // import all with alias mate
import molt from "./matematica"; // Acces to default export. L'alias can have any name
import op, {sommaMultipla, Calcolatrice} from "./matematica"; // Import default + singol

console.log(somma(3,5));

mate.sommaMultipla(4,6,7,8);

molt(4, 7);

console.log("=".repeat(20));
import myPath from "./es-path";
myPath();