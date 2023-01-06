import commands from '../commands'
import { Command } from '../types'
import {EditReply, event, Reply} from  "../utils"

// Wihtout the Flat the allCommands would have been Commands[][], now is flat
const allCommands = commands.map(({commands}) => commands).flat()
const allCommandsMap = new Map<string, Command>(
    allCommands.map((c) => [c.meta.name, c])
)

export default event('interactionCreate', async ({ log, client}, interaction) => {
        if(!interaction.isChatInputCommand()) return
        try {
            const commandName = interaction.commandName
            const command = allCommandsMap.get(commandName)
            if(!command) throw new Error('Command not found...')
        } catch(e) {

        }
    }
)
