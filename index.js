import { Reptile } from './rectangle.js'
import { addUserForm } from './addUserForm.js'

let alligator = new Reptile("alligator", true);
let chicken = new Reptile("chicken", false)
alligator.doesItDrown();
chicken.doesItDrown();

let form = new addUserForm("form")
form.sendform();
