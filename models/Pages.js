import {Schema, model, models} from 'mongoose'

const PagesSchema = new Schema({
    PageTitle: {
        type: String,
        required: true,
    },
    property1: {
        type: String
    },
    property2: {
        type: String
    },
    property3 : {
        type: String
    },
    property4 : {
        type: String
    },
    property5 : {
        type: String
    },
    property6: {
        type: String
    },
    property7 : {
        type: String
    },
    property8 : {
        type: String
    },
    property9: {
        type: String
    },
    property10: {
        type: String
    },
    property11: {
        type: String
    },
    property12: {
        type: String
    },
    property13: {
        type: String
    },
    property14: {
        type: String
    },
})

const Pages = models.Pages || model('Pages', PagesSchema)

export default Pages