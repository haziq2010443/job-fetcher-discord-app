import 'dotenv/config'
import { InstallGlobalCommands } from './utils.js'

const { ApplicationCommandType } = require('discord.js')

// command to search available job using keyword
const COMMAND = {
  name: 'search',
  description: "Search for jobs based on a keyword",
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'keyword',
      type: 3, // String type
      description: "Enter job keyword",
      required: true
    }
  ]
}

InstallGlobalCommands(process.env.APP_ID, COMMAND)
module.exports = { COMMAND }
