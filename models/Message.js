import {Schema, model, models} from 'mongoose'

const MessageSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    phone: {
        type: String,
    },
    body : {
        type: String,
    },
    read: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
})

const Message = models.Message || model('Message', MessageSchema)

export default Message