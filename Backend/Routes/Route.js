import Routes from "express"
import formController from "../controllers/formController.js"
import formValidation from "../Middlewares/FormValidation.js"
import { contactData, deleteContact, getSortData } from "../controllers/contactData.js"
const routes = Routes()

routes.post('/form',formValidation,formController)
routes.get('/data',contactData)
routes.delete('/delete/:id',deleteContact)
routes.get('/data/sort' ,getSortData)
export default routes