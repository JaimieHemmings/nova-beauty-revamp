import {Schema, model, models} from 'mongoose'

const PagesSchema = new Schema({
    PageTitle: {
        type: String
    },
    BannerTitle: {
        type: String
    },
    BannerMessage: {
        type: String
    },
    IntroTitleStart : {
        type: String
    },
    IntroTitleHighlight : {
        type: String
    },
    IntroTitleEnd : {
        type: String
    },
    IntroMessage: {
        type: String
    },
    MainBodyTitleStart : {
        type: String
    },
    MainBodyTitleHighlight : {
        type: String
    },
    MainBodyTitleEnd: {
        type: String
    },
    MainBodyMessage: {
        type: String
    },
})

const Pages = models.PagesSchema || model('Pages', PagesSchema)

export default Pages